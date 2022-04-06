import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { getChairs } from '../../store/chair'
import ChairCard from "../ChairCard";
import './ChairsList.css'




function ChairsList() {
    const dispatch = useDispatch();
    const history = useHistory()


    const chairs = useSelector(state => {
            return state.chairs
        })

    useEffect(()=> {
        dispatch(getChairs())
    }, [dispatch])
    console.log("chairs in chairlistComponent", chairs);


    if (!chairs){
        return null
    }
    return (
        <div>
            <h1>Chairs to sit in: </h1>
            { Object.values(chairs).map((chair) => {
                return <ChairCard chair={chair} />
            })}
        </div>
    );
}

export default ChairsList;
