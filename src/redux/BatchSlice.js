import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // currentBatchInfo :null,
    allBatchInfo:null,
    enrollDate : null,
    batchTiming: null,

    //-------------------
    fetchingBatches : false,
    isMessageVisible : false,
    batchesShow : false,
    //----------------------
    render : false,

}
const batchInfoSlice = createSlice({
    name : 'batchInfo',
    initialState:initialState,
    reducers : {
        // setCurrentBatchInfo(state,action){
        //     state.currentBatchInfo =  action.payload;
        // },
        setAllBatchInfo(state,action){
            state.allBatchInfo =  action.payload;
        },
        setEnrollDate(state,action){
            state.enrollDate =  action.payload;
        },
        setBatchTiming(state,action){
            state.batchTiming =  action.payload;
        },

        setFetchingBatches(state,action){
            state.fetchingBatches = action.payload;
        },
        setMessageVisible(state,action){
            state.isMessageVisible = action.payload;
        },
        setReRender(state){
            state.render = !state.render;
        },
        setBatchesShow(state,action){
            state.batchesShow = action.payload;
        }
    }
});
export default batchInfoSlice;
export const batchInfoActions = batchInfoSlice.actions;