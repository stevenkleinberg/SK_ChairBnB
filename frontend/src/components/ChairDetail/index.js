import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getOneChair } from '../../store/chair'
import ChairCard from "../ChairCard";
import DeleteChairModal from "../DeleteChairModal";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ImageSwiper from "../ImageSwiper";
import BookingForm from "../BookingForm";


const ChairDetail = () => {

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


    useEffect(() => {
        dispatch(getOneChair(id))
    }, [dispatch])



    return (
        <div className="details-wrapper">
            {chair &&
                <>
                    <div className="chair-detail-card-img">

                        {chair.Images.length >= 1 &&
                            <ImageSwiper className="chair-detail-img" images={chair.Images} />
                        }

                    </div>
                    <div className="chair-detail-card-name">
                        <h1 className="chair-detail-name">{chair.name}</h1>
                        <div className="chair-detail-location">
                            <p>{`${chair.address} ${chair.city}, ${chair.state}`}</p>
                        </div>
                        <div className="chair-detail-desc">
                            <h2>About this Chair</h2>
                            <h3 className="chair-detail-desc">{chair.description}</h3>
                        </div>
                    </div>
                    <div className="chair-detail-card-booking">
                        <BookingForm chair={chair} />
                    </div>
                </>
            }
            {userId === chair?.userId &&
                <div>
                    <NavLink to={`/chairs/edit/${id}`}>Edit</NavLink>
                    <DeleteChairModal chair={chair} />
                </div>

            }

        </div>
    )
}

export default ChairDetail
