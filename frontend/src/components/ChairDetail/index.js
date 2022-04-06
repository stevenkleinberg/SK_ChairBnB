import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getOneChair } from '../../store/chair'
import ChairCard from "../ChairCard";



const ChairDetail = () => {

    const params = useParams()
    const {id} = params
    const chair = useSelector(state => {
        return state.chairs[id]
    })
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getOneChair(id))
    }, [dispatch])



    return (
        <div className="chairDetail">
            <h1>chair detail</h1>
            { chair &&
            <div className="chair-card">
            <h2>{chair.name}</h2>
            <h3>{chair.description}</h3>
            <h3>{`$${chair.price} per sit`}</h3>
        </div>
            }
            <div>
                <NavLink to={`/chairs/edit/${id}`}>Edit</NavLink>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default ChairDetail
