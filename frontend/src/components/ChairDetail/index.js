import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getOneChair } from '../../store/chair'
import ChairCard from "../ChairCard";
import DeleteChairModal from "../DeleteChairModal";



const ChairDetail = () => {

    const params = useParams()
    const { id } = params
    const chair = useSelector(state => {
        return state.chairs[id]
    })
    const sessionUser = useSelector(state => state.session.user);
    let userId;
    if(sessionUser){
        userId = sessionUser.id;
    }
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getOneChair(id))
    }, [dispatch])



    return (
        <div className="chairDetail">
            <h1>chair detail</h1>
            {chair &&
                <div className="chair-card">
                    <h2>{chair.name}</h2>
                    <h3>{chair.description}</h3>
                    <h3>{`$${chair.price} per sit`}</h3>
                </div>
            }
            {userId === chair.userId &&
                <div>
                    <NavLink to={`/chairs/edit/${id}`}>Edit</NavLink>
                    <DeleteChairModal chair={chair} />
                </div>

            }
        </div>
    )
}

export default ChairDetail
