import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { batchInfoActions } from "../redux/BatchSlice";
import { useSelector } from "react-redux";
const FetchBatchInfo = () => {
    const dispatch = useDispatch();
    const batchInfo = useSelector(state => state.batchInfoReducer.allBatchInfo);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        };
        dispatch(batchInfoActions.setFetchingBatches(true));
        // fetch('http://127.0.0.1:8000/batch', options)
        fetch('https://yogabackend-production-7788.up.railway.app/batch', options)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                // console.log(data);
                dispatch(batchInfoActions.setFetchingBatches(false));
                dispatch(batchInfoActions.setAllBatchInfo(data));
            })
    }, [ 10])
}
export { FetchBatchInfo }