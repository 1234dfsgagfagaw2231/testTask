import React, {useState} from 'react';
import {
    DataItemBtn,
    ErrorBlock, FlexRowContainer,
    FormBtn, FormTitle,
    Input,
    Label,
    ListSpan,
    ModalContainer
} from "../../styles/styles";
import {DeleteBtnSvg} from "../Svg/Svg";
import {createData} from "../../api/api";
import {useAppDispatch} from "../../hooks/hooks";
import {addItem} from "../../store/reducers";


const Modal = (props?: any) => {
    const [name, setName] = useState<string>(props.name? props.name : '')
    const [coordinate, setCoordinate] = useState<string[]>(props.coordinate? props.coordinate : [0,0])
    const [labels, setLabels] = useState<string[]>(props.labels? props.labels : [''])
    const dispatch = useAppDispatch();

    const create = () => {
      const body = {
            name: name,
            coordinate: coordinate,
            labels: labels.filter(i => i)
        }
        createData(body)
            .then(()=> {
                alert('item created');
                props.openModal();
                dispatch(addItem(body))
            })
            .catch(() => alert('item don`t created, try again'))
    }

    return (
        <ModalContainer>
            <FormTitle>Create new object</FormTitle>
            <div>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <Label>Coordinate</Label>
                <label>
                    <ListSpan>x:</ListSpan>
                <Input type="number" ww='50px' required value={coordinate[0]}
                       onChange={(e) => setCoordinate((prev: string[]) => [e.target.value, prev[1]])}/>
                </label>
                <label>
                    <ListSpan>y:</ListSpan>
                <Input type="number" ww='50px' required value={coordinate[1]}
                       onChange={(e) => setCoordinate((prev: string[]) => [prev[0],e.target.value])}/>
                </label>
            </div>
            <div>
                <Label>Labels</Label>
                {labels.map((item: string, index: any)=>
                    <div key={index}>
                    <Input mr='0'  required type="text" value={labels[index]}
                           onChange={(e) => setLabels((prev:string[]) => prev.map((el: string, inx: any) => inx === index ? e.target.value : el))}/>
                        <DataItemBtn onClick={() => setLabels((prev: string[]) => prev.filter((el, inx) =>  inx!== index))}><DeleteBtnSvg/></DataItemBtn>
                    </div>
            )}
            <FormBtn onClick={() => setLabels((prev: string[]) => [...prev, ''])}>Add label+</FormBtn>
                {!name || !coordinate[0] || !coordinate[1] || labels.length === 0 ?
                    <ErrorBlock>All fields are required</ErrorBlock>
                    :
                    null}
                <FlexRowContainer mt='50px'>
                <FormBtn  type='submit' disabled={!name || !coordinate[0] || !coordinate[1] || labels.length === 0}
                          onClick={()=> create()}>
                    Submit
                </FormBtn>
                    <FormBtn bg='#FF0F43BF' onClick={() => props.openModal()}>Cancel</FormBtn>
                </FlexRowContainer>
        </div>
    </ModalContainer>
    );
};



export default Modal;

