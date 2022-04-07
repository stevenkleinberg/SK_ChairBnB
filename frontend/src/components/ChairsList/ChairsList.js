import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { getChairs } from '../../store/chair'
import ChairCard from "../ChairCard";
// import './ChairsList.css'




function ChairsList() {
    const dispatch = useDispatch();
    const history = useHistory()


    const chairs = useSelector(state => {
            return state.chairs
        })

    useEffect(()=> {
        dispatch(getChairs())
    }, [dispatch])



    if (!chairs){
        return null
    }
    return (
        <div className="chairs-list">
            <div className="wrapper">
            { Object.values(chairs).map((chair) => {
                return <ChairCard key={chair.id} chair={chair} />
            })}
            </div>
        </div>
    );
}

export default ChairsList;
