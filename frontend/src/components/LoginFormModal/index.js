import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { NavLink } from "react-router-dom";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const closeModalFunc = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModalFunc={closeModalFunc}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
