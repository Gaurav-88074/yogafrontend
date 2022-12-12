import React from 'react'
import classes from './BatchCard.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { batchInfoActions } from '../redux/BatchSlice';
const BatchCard = (obj) => {
    // console.log(obj);

    const dispatch = useDispatch();

    const email = useSelector(state => state.authReducer.email);
    function enrollButtonHandler() {
        const month = new Date().getMonth();
        const enrollDate = new Date().toLocaleDateString();
        const body = {
            batch_id: obj._id,
            email: email,
            month: month,
            enrollDate : enrollDate
        }
        // console.log(body);
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            'Accept': 'application/json' },
            body: JSON.stringify(body)
        };
        // fetch('http://127.0.0.1:8000/membership', options)
        fetch('https://yogabackend-production-7788.up.railway.app/membership', options)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                dispatch(batchInfoActions.setReRender());
            }) 
            .catch(err => console.error(err));
    }
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
                <button className={classes.hphAuthSection}
                    onClick={enrollButtonHandler}
                >Enroll</button>
            </div>
        </div>
    )
}

export default BatchCard