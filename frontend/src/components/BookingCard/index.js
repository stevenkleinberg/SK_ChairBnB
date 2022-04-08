import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, NavLink } from "react-router-dom";
import { getChairs } from '../../store/chair'
import DeleteBookingModal from "../DeleteBookingModal";

export default function BookingCard({ booking }) {
    const dispatch = useDispatch();
    const sitDate = new Date(booking.sitDate)
    const standDate = new Date(booking.standDate)

    const chair = useSelector(state => {
        return state.chairs[booking.chairId]
    })

    useEffect(() => {
        dispatch(getChairs())
    }, [dispatch])

    let mainImgUrl;
    if(chair){
        if (chair.Images.length >= 1) {
            mainImgUrl = chair.Images[0].url
        } else {
            mainImgUrl = "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    }
    if(!chair){
        return(
            <div>
                <h1>loading bookings</h1>
            </div>
        )
    }
    return (
        <div className="booking-card" >
            <div className="booking-card__body">
                <img className="booking-card__chair-img" src={mainImgUrl} />
                <h2 className="booking-card__chair-name">{chair.name}</h2>
                {sitDate === standDate &&
                    <p className="booking-card__dates">{sitDate.toDateString()}</p>
                }
                {sitDate !== standDate &&
                <div className="booking-card-dates-div">
                    <p className="booking-card__dates">{sitDate.toDateString()}</p>
                    <p className="booking-card__dates">To</p>
                    <p className="booking-card__dates">{standDate.toDateString()}</p>
                </div>
                }
            </div>

            <DeleteBookingModal booking={booking} />
        </div>
    )
}
