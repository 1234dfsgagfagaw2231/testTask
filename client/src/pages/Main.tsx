import React, {FC, useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {DataType, setState} from "../store/reducers";
import {getAllData} from "../api/api";
import DataItem from "../components/DataItem/DataItem";
import {CustomBtn, FlexColContainer, FlexRowContainer, ListTitle} from "../styles/styles";
import Modal from "../components/Modal/Modal";
import CanvasComponent, {Entity} from "../components/Canvas/CanvasComponent";


const Main: FC = React.memo(() => {
    const [data, setData] = useState<DataType[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [firstRend, setFirstRend]= useState<boolean>(true);
    const dispatch = useAppDispatch();
    const { main } = useAppSelector((state) => state);


    useEffect(() => {
        getAllData()
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                if (firstRend) {
                    setFirstRend(false)
                    dispatch(setState(res));
                }
            })
            .catch((e) => console.error(e));
    }, [main]);


    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const canvasMemoData = useMemo((): Entity[] => {
        return data.map((i) => ({
            name: i.name,
            point: {
                x: +i.coordinate[0],
                y: +i.coordinate[1],
                labels: i.labels,
            },
        }));
    }, [data])


    return (
        <>
            <FlexColContainer>
                <CanvasComponent entities={canvasMemoData}/>
                <CustomBtn onClick={() => openModal()}>Created add +</CustomBtn>
                <FlexRowContainer>
                    <FlexRowContainer>
                        <ListTitle>Name</ListTitle>
                        <ListTitle>Coordinate</ListTitle>
                        <ListTitle>Labels</ListTitle>
                    </FlexRowContainer>
                    <ListTitle></ListTitle>
                </FlexRowContainer>
                {data.length > 0 && data.map((i) =>
                    <DataItem key={i.id}
                              id={i.id}
                              name={i.name}
                              coordinate={i.coordinate}
                              labels={i.labels}
                    />
                )}
                {isOpen && (<Modal openModal={openModal}/>)}
            </FlexColContainer>
        </>
    );
});

export default Main;