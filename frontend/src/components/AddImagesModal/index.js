import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory, NavLink  } from "react-router-dom";
import {addChairImage} from '../../store/chair'

function AddImagesModal({chairId}){
    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState('')

    const closeModalFunc = () => {
      setShowModal(false)
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            chairId,
            url
        }
        let newImage;
         newImage = await dispatch(addChairImage(payload));
        if(newImage){
            setUrl('')
            closeModalFunc();
            history.replace(`/chairs/${chairId}`);
        }
    }
    return (
        <div className='addImgModal'>
          <button className="booking-card__btn" onClick={() => setShowModal(true)}>Add More Images!</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <form className='addImgForm' onSubmit={handleSubmit}>
              <h1>Add Another Image</h1>
              <label className="chairFormLabel">
                    Image Url
                    <input
                        className="chairFormInput"
                        type="text"
                        value={url}
                        placeholder="Url"
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    </label>
                  <div className='deleteChairButtons'>
                      <button type='submit' className="booking-card__btn">Add Image</button>
                      <button className="booking-card__btn" onClick={()=> closeModalFunc()}>Cancel</button>
                  </div>
              </form>
            </Modal>
          )}
        </div>
      );
}
export default AddImagesModal;
