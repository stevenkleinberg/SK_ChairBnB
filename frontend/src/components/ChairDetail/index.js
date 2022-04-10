import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getOneChair } from '../../store/chair'
import ChairCard from "../ChairCard";
import DeleteChairModal from "../DeleteChairModal";
import AddImagesModal from "../AddImagesModal";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ImageSwiper from "../ImageSwiper";
import BookingForm from "../BookingForm";


const ChairDetail = () => {
    const history = useHistory();
    const params = useParams()
    const { id } = params
    const chair = useSelector(state => {
        return state.chairs[id]
    })
    const sessionUser = useSelector(state => state.session.user);
    let userId;
    if (sessionUser) {
        userId = sessionUser.id;
    } else {
        userId = -1;
    }
    const dispatch = useDispatch();

    const handleEditClick =()=>{
        history.replace(`/chairs/edit/${id}`)
    }
    useEffect(() => {
        dispatch(getOneChair(id))
    }, [dispatch])



    return (
        <div className="details-wrapper">
            {chair &&
                <>
                    <div className="chair-detail-card-img">

                        {chair.Images &&
                            <ImageSwiper className="chair-detail-img" images={chair.Images} />
                        }
                        {userId === chair?.userId &&
                          <AddImagesModal chairId={chair.id} />
                        }

                    </div>
                    <div className="chair-detail-card-name">
                        <h1 className="chair-detail-name">{chair.name}</h1>
                        <div className="chair-detail-location">
                            <p>{`${chair.address} ${chair.city}, ${chair.state}`}</p>
                        </div>
                        <div className="chair-detail-desc">
                            <h4>About this Chair:</h4>
                            <h3 className="chair-detail-desc">{chair.description}</h3>
                        </div>
                        {userId === chair?.userId &&
                            <div className="editDeleteBtnDiv">
                                <button className="booking-card__btn" onClick={handleEditClick}>Edit</button>
                                <DeleteChairModal chair={chair} />
                            </div>

                        }
                    </div>

                        <BookingForm  chair={chair} />

                </>
            }


        </div>
    )
}

export default ChairDetail
