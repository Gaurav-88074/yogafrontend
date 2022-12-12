import React from 'react'
import classes from './Dashboard.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { batchInfoActions } from '../redux/BatchSlice';
import { FetchBatchInfo } from '../API/FetchBatchInfo';
import { FetchCurrentBatch } from '../API/FetchCurrentBatch';
import BatchCard from '../components/BatchCard';
import {RotateToken} from '../API/RotateToken';
const Dashboard = () => {
    const dispatch = useDispatch();

    const batchInfo = useSelector(state => state.batchInfoReducer.allBatchInfo);

    const isMessageVisible = useSelector(state => state.batchInfoReducer.isMessageVisible);
    const batchesShow = useSelector(state => state.batchInfoReducer.batchesShow);

    const enrollDate = useSelector(state => state.batchInfoReducer.enrollDate);
    const batchTiming = useSelector(state => state.batchInfoReducer.batchTiming);

    const expiryDate  =new Date();

    if(enrollDate!=null){
        expiryDate.setDate(30);
    }
    RotateToken();

    FetchCurrentBatch();
    FetchBatchInfo();

    const fetchingBatches = useSelector(state => state.batchInfoReducer.fetchingBatches);

    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem("refresh");
        navigate("/");
        window.location.reload();
    }
    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav1}>
                    <div className={classes.logo}>YOGA </div>
                </nav>
                <nav className={classes.nav2}>

                    <button
                        className={classes.hphAuthSection}
                        onClick={logoutHandler}
                    >
                        logout
                    </button>
                </nav>
            </header>
            {
                (isMessageVisible)
                &&
                <section className={classes.batchInfo1}>
                    Currently your are not enrolled in any batch
                    <button className={classes.hphAuthSection}
                        onClick={() => { 
                            dispatch(batchInfoActions.setMessageVisible(false)); 
                        }}
                    >Okay
                    </button>
                </section>
            }
            <main className={classes.main}>

                {
                    (fetchingBatches===true )
                        &&
                    <>
                        <div className={classes.skeleton}></div>
                        <div className={classes.skeleton}></div>
                        <div className={classes.skeleton}></div>
                        <div className={classes.skeleton}></div>
                    </>
                }
                {
                    (batchInfo !== null && enrollDate==null && batchesShow==true)
                    &&
                    batchInfo.map(obj => <BatchCard {...obj} key={obj._id}/>)
                }
                <main className={classes.main}>

                    {
                        enrollDate !== null
                        &&
                        <div className={classes.currentBatch}>
                            <div className={classes.batchLeft}>

                            </div>
                            <div className={classes.batchRight}>
                                <section className={classes.batchHeading}>
                                    <span >
                                        Batch Timing
                                    </span>
                                    <span >
                                        {batchTiming}
                                    </span>
                                </section>
                                <section className={classes.subHeadings}>
                                    <span >
                                        Enroll Date
                                    </span>
                                    <span >
                                        {enrollDate}
                                    </span>
                                </section>
                                <section className={classes.subHeadings}>
                                    <span >
                                        Expiry Date
                                    </span>
                                    <span>
                                        {expiryDate.toLocaleDateString()}
                                    </span>
                                </section>
                            </div>
                        </div>
                    }
                </main>

            </main>
        </>
    )
}

export default Dashboard