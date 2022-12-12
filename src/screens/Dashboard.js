import React from 'react'
import classes from './Dashboard.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FetchBatchInfo } from '../API/FetchBatchInfo';
import { FetchCurrentBatch } from '../API/FetchCurrentBatch';
import BatchCard from '../components/BatchCard';
import {RotateToken} from '../API/RotateToken';
const Dashboard = () => {
    const batchInfo = useSelector(state => state.batchInfoReducer.allBatchInfo);
    const currentBatchInfo = useSelector(state => state.batchInfoReducer.currentBatchInfo);
    
    RotateToken();
    FetchBatchInfo();
    FetchCurrentBatch();

    const [batchMessage1, setBatchMessage1] = useState(true);

    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem("refresh");
        navigate("/");
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
                (batchMessage1==true && currentBatchInfo==null)
                &&
                <section className={classes.batchInfo1}>
                    Currently your are not enrolled in any batch
                    <button className={classes.hphAuthSection}
                        onClick={() => { setBatchMessage1(false) }}
                    >Okay
                    </button>
                </section>
            }
            <main className={classes.main}>

                {
                    (batchInfo == null)
                    &&
                    <div className={classes.skeleton}>

                    </div>
                }
                {
                    (batchInfo !== null && currentBatchInfo==null)
                    &&
                    batchInfo.map(obj => <BatchCard {...obj} key={obj._id}/>)
                }
                <main className={classes.main}>

                    {
                        currentBatchInfo !== null
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
                                        AM - 8AM
                                    </span>
                                </section>
                                <section className={classes.subHeadings}>
                                    <span >
                                        Enroll Date
                                    </span>
                                    <span >
                                        02-12-2022
                                    </span>
                                </section>
                                <section className={classes.subHeadings}>
                                    <span >
                                        Expiry Date
                                    </span>
                                    <span>
                                        30-12-2022
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