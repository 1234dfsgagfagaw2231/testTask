import React, {ReactElement} from 'react';
import {DataType, deleteStateItem} from "../../store/reducers";
import {DataItemBtn, DataItemContainer, FlexRowContainer, ListItem, ListSpan} from "../../styles/styles";
import {DeleteBtnSvg, EditSvg} from "../Svg/Svg";
import {useNavigate} from "react-router-dom";
import {deleteSingleData} from "../../api/api";
import {useAppDispatch} from "../../hooks/hooks";


const DataItem = React.memo<DataType>((props): ReactElement => {
    const {id, name, coordinate, labels} = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const deleteItem = () => {
        if (id !== undefined) {
            deleteSingleData(id)
                .then(() => alert('Element was deleted'))
                .then(()=> dispatch(deleteStateItem(id)))
                .catch(()=> alert('Element was not deleted, try again'))
        }
    }


    return <FlexRowContainer>
        <DataItemContainer onClick={() => navigate('/' + id)}>
            <ListItem>{name}</ListItem>
            <ListItem>
                <ListSpan>x: {coordinate[0]}</ListSpan>
                <ListSpan>y: {coordinate[1]}</ListSpan>
            </ListItem>
            <ListItem>
                {labels.map((el, index) => <ListSpan key={index}>{el}</ListSpan>)}
            </ListItem>
        </DataItemContainer>
        <FlexRowContainer width='100px'>
            <DataItemBtn onClick={() => navigate('/' + id)}><EditSvg/></DataItemBtn>
            <DataItemBtn onClick={() => deleteItem()}><DeleteBtnSvg/></DataItemBtn>
        </FlexRowContainer>
    </FlexRowContainer>
})

export default DataItem;



