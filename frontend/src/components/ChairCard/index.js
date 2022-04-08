import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, NavLink } from "react-router-dom";

export default function ChairCard({ chair }) {
const history = useHistory()
const handleClick = () => {
    history.push(`/chairs/${chair.id}`)
}
let mainImgUrl;
if(chair.Images.length >= 1){
    mainImgUrl = chair.Images[0].url
}else{
    mainImgUrl = "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}
    return (
        <div className="chair-card" >
            <div className="chair-card__body">
                <img className="chair-card__img" src={mainImgUrl} />
                <h2 className="chair-card__name">{chair.name}</h2>
                <p className="chair-card__desc">{chair.description}</p>
                <h3 className="chair-card__price">{`$${chair.price} per sit`}</h3>
            </div>
            <button className="chair-card__btn" onClick={handleClick}>View Chair</button>
        </div>
    )
}
