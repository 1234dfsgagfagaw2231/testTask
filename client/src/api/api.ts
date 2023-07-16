import {config} from "../config/config";
import {DataType} from "../store/reducers";



export const getAllData = () => fetch( config.__API_URL__, {method: "get"});

export const getSingleData = (id: number) => fetch( config.__API_URL__ + `/${id}`, {method: "get"});


export const deleteSingleData = (id: number) => fetch( config.__API_URL__ + `/${id}`, {method: "delete"});

export const  createData = (body:DataType) =>
    fetch(config.__API_URL__, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

export const editData = (id: number, body:DataType) => fetch( config.__API_URL__ + `/${id}`, {
    method: "put",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});