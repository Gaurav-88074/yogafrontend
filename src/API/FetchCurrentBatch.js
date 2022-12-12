import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { batchInfoActions } from "../redux/BatchSlice";

const FetchCurrentBatch = async () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.authReducer.username);

  const render = useSelector(state => state.batchInfoReducer.render);
  // console.log(email);
  useEffect(() => {
    const ff = async () => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          month: new Date().getMonth()
        })
      };

      const response = await fetch('http://127.0.0.1:8000/currentbatchinfo', options)
      if (response.status == 200) {
        let data = await response.json();
        // console.log(data);
        dispatch(batchInfoActions.setMessageVisible(false));
        dispatch(batchInfoActions.setEnrollDate(data.enrollDate));
        dispatch(batchInfoActions.setBatchTiming(data.batch.batchtiming));
      }
      else {
        dispatch(batchInfoActions.setMessageVisible(true));
        dispatch(batchInfoActions.setBatchesShow(true));
        // console.log(await response.json());
      }
    }
    ff();
  }, [render,email])
}

export { FetchCurrentBatch }