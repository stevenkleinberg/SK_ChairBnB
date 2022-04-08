import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addBooking } from "../../store/booking";

const BookingForm = ({chair}) => {
const [sitDate, setSitDate] = useState();
const [standDate, setStandDate] = useState();
const [totalCost, setTotalCost] = useState(chair.price);
const [hasSubmitted, setHasSubmitted] = useState(false)
const sessionUser = useSelector(state => state.session.user);
const dispatch = useDispatch();


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
useEffect(()=>{
    let numDays = 0
    if(sitDate && standDate){
        numDays = dateDiffInDays(sitDate, standDate );
    }
    setTotalCost(chair.price + (chair.price * numDays));
}, [sitDate, standDate])

if(!sessionUser){
    return (
        <div>
            <h1>Please log in or sign up to book this chair!</h1>
        </div>
    )
}
const userId = sessionUser.id;
const chairId = chair.id;

const handleSubmit = async (e) => {
    e.preventDefault();

    const payload ={
        userId,
        chairId,
        standDate,
        sitDate
    }

    let newBooking;
    newBooking = await dispatch(addBooking(payload));
    if(newBooking){
        console.log("new booking was ok")
        setHasSubmitted(true)
    }
}
    if (hasSubmitted){

        const readableSitDate = sitDate.toDateString()
        return(
            <div>
                <h1>{`Congrats ${sessionUser.username}!`}</h1>
                <h3>{`You have sucsessfully booked ${chair.name} for ${readableSitDate} `}</h3>
            </div>
        )
    }
    return (
        <div>
            <h3>{`$${chair.price} per sit`}</h3>
            <div className="booking-form-box">
                <form onSubmit={handleSubmit}>
                    <span className="date-picker-span">
                        <label className="booking-form-Label">
                            Sit Down
                            <DatePicker
                                selected={sitDate}
                                onChange={ date => setSitDate(date) }
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                                />
                        </label>
                        <label className="booking-form-Label">
                            Stand Up
                            <DatePicker
                                selected={standDate}
                                onChange={date => setStandDate(date) }
                                minDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                        </label>
                    </span>
                    <p>{`Total: $${totalCost}`}</p>
                    <button type="submit">Book this Chair! </button>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;
