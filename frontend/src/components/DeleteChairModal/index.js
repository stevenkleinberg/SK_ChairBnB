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
    const handleClick = async (e) => {



        const id = chair.id;
        let deletedChair;
        deletedChair = await dispatch(removeChair(id));
        console.log("deletedchair----->",deletedChair)
        if(deletedChair){
            history.replace(`/`)
        }
    }
    return (
        <>
          <button onClick={() => setShowModal(true)}>Delete</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className='deleteChairBox'>
                  <h1>Are you sure you want to Delete this chair?</h1>
                  <div className='deleteChairButtons'>
                      <NavLink to='/' onClick={handleClick}>Yes</NavLink>
                      <NavLink to={`/chairs/${chair.id}`} onClick={()=> closeModalFunc()}>No</NavLink>
                  </div>
              </div>
            </Modal>
          )}
        </>
      );
}

export default DeleteChairModal;
