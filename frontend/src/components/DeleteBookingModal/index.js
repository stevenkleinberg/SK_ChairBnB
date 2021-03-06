import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory, NavLink  } from "react-router-dom";
import {removeBooking} from '../../store/booking'
function DeleteBookingModal({booking}){
    const [showModal, setShowModal] = useState(false);
    const closeModalFunc = () => {
      setShowModal(false)
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (e) => {
      e.preventDefault();
        const id = booking.id;
        let deletedBooking;
        deletedBooking = await dispatch(removeBooking(id));
        if(deletedBooking){
            closeModalFunc();
            history.replace('/my-bookings');
        }
    }
    return (
        <div className='deleteBookingModal'>
          <button className="booking-card__btn" onClick={() => setShowModal(true)}>Cancel Booking</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <form className='deleteBookingBox' onSubmit={handleSubmit}>
                  <h1>Are you sure you want to cancel this booking?</h1>
                  <div className='deleteBookingButtons'>
                      <button type='submit' className="booking-card__btn" >Yes</button>
                      <button className="booking-card__btn" onClick={()=> closeModalFunc()}>No</button>
                  </div>
              </form>
            </Modal>
          )}
        </div>
      );
}

export default DeleteBookingModal;
