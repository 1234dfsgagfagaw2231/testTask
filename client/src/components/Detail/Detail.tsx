import React, {useState} from 'react';
import {editData} from "../../api/api";
import {
    DataItemBtn,
    ErrorBlock,
    FlexRowContainer,
    FormBtn,
    FormTitle,
    Input,
    Label,
    ListSpan
} from "../../styles/styles";
import {DeleteBtnSvg} from "../Svg/Svg";
import {useNavigate} from "react-router-dom";
import CanvasComponent from "../Canvas/CanvasComponent";
import {useAppDispatch} from "../../hooks/hooks";
import {editItem} from "../../store/reducers";

const Detail = (props?: any) => {
    const [name, setName] = useState<string>(props.name ? props.name : '');
    const [coordinate, setCoordinate] = useState<string[]>(props.coordinate ? props.coordinate : [0, 0]);
    const [labels, setLabels] = useState<string[]>(props.labels ? props.labels : ['', '']);
    const [edit, setEdit] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const changeData = () => {
        const body = {
            name: name,
            coordinate: coordinate,
            labels: labels.filter(i => i)
        }
        editData(props.id, body)
            .then(() => {
                alert('item changed');
                dispatch(editItem({id: props.id, ...body}))
                setEdit(false)
            })
            .catch(() => alert('item don`t changed, try again'))
    }
    return (
        <>
            <FormTitle>{`Object ` + name}</FormTitle>
            <CanvasComponent entities={[{
                name: name,
                point: {
                    x: +coordinate[0],
                    y: +coordinate[1],
                    labels: labels,
                }
            }]}/>
            <div>
                <Label>Name</Label>
                <Input type="text" disabled={!edit} value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <Label>Coordinate</Label>
                <label>
                    <ListSpan>x:</ListSpan>
                    <Input type="number" disabled={!edit} ww='50px' required value={coordinate[0]} onChange={(e) => setCoordinate((prev: string[]) => [e.target.value, prev[1]])}/>
                </label>
                <label>
                    <ListSpan>y:</ListSpan>
                    <Input type="number" disabled={!edit} ww='50px' required value={coordinate[1]} onChange={(e) => setCoordinate((prev: string[]) => [prev[0],e.target.value])}/>
                </label>
            </div>
            <div>
                <Label>Labels</Label>
                {labels.map((item: string, index: any)=>
                    <div key={index}>
                        <Input mr='0' disabled={!edit}  required type="text" value={labels[index]} onChange={(e) => setLabels((prev:any) => prev.map((el: string, inx: any) => inx === index ? e.target.value : el))}/>
                        <DataItemBtn disabled={!edit} onClick={() => setLabels((prev: string[]) => prev.filter((el, inx) =>  inx!== index))}><DeleteBtnSvg/></DataItemBtn>
                    </div>
                )}
                <FormBtn disabled={!edit} onClick={() =>  setLabels((prev: string[]) => [...prev, ''])}>Add label+</FormBtn>
                {!name || !coordinate[0] || !coordinate[1] || labels.length === 0 ?
                    <ErrorBlock>All fields are required</ErrorBlock>
                    :
                    null}
                <FlexRowContainer mt='50px'>
                    {edit ?
                    <FormBtn  type='submit' disabled={!name || !coordinate[0] || !coordinate[1] || labels.length === 0}
                              onClick={()=> changeData()}>
                        Submit
                    </FormBtn>
                        :
                        <FormBtn onClick={()=> setEdit(true)}>
                            Edit
                        </FormBtn>
                    }
                    <FormBtn bg='#FF0F43BF' onClick={() => edit? setEdit(false) : navigate('/')}>{edit? 'Cancel Edit' : 'Cancel'}</FormBtn>
                </FlexRowContainer>
            </div>
        </>
    );
};

export default Detail;