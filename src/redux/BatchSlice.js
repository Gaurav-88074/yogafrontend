import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentBatchInfo :null,
    allBatchInfo:null,
}
const batchInfoSlice = createSlice({
    name : 'batchInfo',
    initialState:initialState,
    reducers : {
        setCurrentBatchInfo(state,action){
            state.currentBatchInfo =  action.payload;
        },
        setAllBatchInfo(state,action){
            state.allBatchInfo =  action.payload;
        },
    }
});
export default batchInfoSlice;
export const batchInfoActions = batchInfoSlice.actions;