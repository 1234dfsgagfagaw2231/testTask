import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getSingleData} from "../api/api";
import {FlexColContainer} from "../styles/styles";
import {DataType} from "../store/reducers";
import Detail from "../components/Detail/Detail";
import {useAppSelector} from "../hooks/hooks";

const SingleObj = () => {
    const [obj, setObj] = useState<DataType>()
    const navigate = useNavigate();
    let {id} = useParams();
    const {main} = useAppSelector((state) => state);


// if get data from  server
//     useEffect(()=> {
//         if (id){
//         getSingleData(+id)
//             .then((data) => data.json())
//             .then((ob) => setObj(ob))
//             .catch(()=> navigate('/') )
//         } else {
//             navigate('/')
//         }
//     }, [])

    // if get data from store
    useEffect(() => {
        if (id) {
            const [arr] = main.filter((i) => i.id == id);
            if (arr != null) {
                setObj(arr);
            } else {
                navigate("/");
            }
        }
    }, [id, main, navigate]);

    return (
        <FlexColContainer>
            {obj && (
                <Detail
                    id={obj.id}
                    name={obj.name}
                    coordinate={obj.coordinate}
                    labels={obj.labels}
                />
            )}
        </FlexColContainer>
    );
};

export default SingleObj;