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
    const handleClick = async (e) => {
        const id = booking.id;
        let deletedBooking;
        deletedBooking = await dispatch(removeBooking(id));
        if(deletedBooking){
            closeModalFunc();
            history.replace('/my-bookings');
        }
    }
    return (
        <>
          <button className="booking-card__btn" onClick={() => setShowModal(true)}>Cancel Booking</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className='deleteBookingBox'>
                  <h1>Are you sure you want to cancel this booking?</h1>
                  <div className='deleteBookingButtons'>
                      <button  onClick={handleClick}>Yes</button>
                      <button  onClick={()=> closeModalFunc()}>No</button>
                  </div>
              </div>
            </Modal>
          )}
        </>
      );
}

export default DeleteBookingModal;
