import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { batchInfoActions } from "../redux/BatchSlice";
const FetchCurrentBatch = async () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.authReducer.username);
  // console.log(email);
  useEffect(() => {
    const ff = async () => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email : email})
      };

      const response = await fetch('http://127.0.0.1:8000/currentbatchinfo', options)
      if (response.status == 200) {
        let data = await response.json();
        // console.log(data)
        dispatch(batchInfoActions.setCurrentBatchInfo(data))
      }
      else {

      }
    }
    ff();
  }, [email])
}

export { FetchCurrentBatch }