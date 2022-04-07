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
            {chair &&
                <div className="chair-detail">
                    <h1 className="chair-detail-name">{chair.name}</h1>
                    <div className="chair-detail-img"></div>
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
