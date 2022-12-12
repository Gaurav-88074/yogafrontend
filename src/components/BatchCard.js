import React from 'react'
import classes from './BatchCard.module.css'
const BatchCard = (obj) => {
    // console.log(obj);
    return (
        <div className={classes.batchCard} >
            <div className={classes.cardTop}>
                {obj.batchtiming}
            </div>
            <div className={classes.cardMid}>

            </div>
            <div className={classes.cardBottom}>
                <div className={classes.price}>
                    INR 500/-
                </div>
                <button className={classes.hphAuthSection}>Enroll</button>
            </div>
        </div>
    )
}

export default BatchCard