import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface DataType {
    id?: number,
    name: string,
    coordinate: string[],
    labels: string[],
    createdAt?: string,
    updatedAt?: string
    openModal?: void
}


const initialState: DataType[] = []


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<DataType[]>) => {
            state = [...action.payload]
            return state;
        },
        addItem: (state, action: PayloadAction<DataType>) => {
            state = [...state, action.payload]
            return state;
        },
        editItem: (state, action: PayloadAction<DataType>) => {
            state = [...state.filter(i => i.id !== action.payload.id), action.payload]
            return state;
        },
        deleteStateItem: (state, action: PayloadAction<number | undefined>) => {
            state = [...state.filter(item => item.id !== action.payload)]
            return state;
        },
}})

export const {setState, deleteStateItem,editItem,addItem} = mainSlice.actions

export default mainSlice.reducer