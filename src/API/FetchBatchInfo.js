import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { batchInfoActions } from "../redux/BatchSlice";
// import { useSelector } from "react-redux";
const FetchBatchInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://127.0.0.1:8000/batch', options)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                // console.log(data);
                dispatch(batchInfoActions.setAllBatchInfo(data))
            })
    }, [10])
}
export { FetchBatchInfo }