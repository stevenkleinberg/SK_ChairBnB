import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory, NavLink  } from "react-router-dom";
import { removeChair } from "../../store/chair";

function DeleteChairModal({chair}){
    const [showModal, setShowModal] = useState(false);
    const closeModalFunc = () => {
      setShowModal(false)
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (e) => {
      e.preventDefault();
        const id = chair.id;
        let deletedChair;
        deletedChair = await dispatch(removeChair(id));
        console.log("deletedchair----->",deletedChair)
        if(deletedChair){
            closeModalFunc()
            history.replace(`/`)
        }
    }
    return (
        <div className='deleteChairModal'>
          <button  className="booking-card__btn" onClick={() => setShowModal(true)}>Delete</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <form className='deleteChairForm' onSubmit={handleSubmit}>
                  <h1>Delete this chair?</h1>
                  <div className='deleteChairButtons'>
                      <button type='submit' className="booking-card__btn" >Yes</button>
                      <button className="booking-card__btn" onClick={()=> closeModalFunc()}>No</button>
                  </div>
              </form>
            </Modal>
          )}
        </div>
      );
}

export default DeleteChairModal;
