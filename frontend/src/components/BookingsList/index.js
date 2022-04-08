import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import BookingCard from "../BookingCard";
import { getUsersBookings} from '../../store/booking'

function BookingsList(){
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    let userId = -1;
    if(sessionUser){
        userId = sessionUser.id;
    }
    const bookings = useSelector(state => {
        return state.bookings
    })
    useEffect(()=> {
        if(userId && userId > 0){
            dispatch(getUsersBookings(userId))
        }
    }, [dispatch])
    console.log(bookings)
    if(!sessionUser){
        return (
            <div>
                <h1>please log in to check your bookings!</h1>
            </div>
        )
    }

    return(
        <div className="bookings-list">
            <div className="wrapper">
            { Object.values(bookings).map((booking) => {
                return <BookingCard key={booking.id} booking={booking} />
            })}
            </div>
        </div>
    )
}

export default BookingsList;
