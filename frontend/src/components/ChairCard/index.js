import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, NavLink } from "react-router-dom";

export default function ChairCard({ chair }) {


    return (
        <div className="chair-card">
            <h2><NavLink to={`chairs/${chair.id}`}>{chair.name}</NavLink></h2>
            <h3>{chair.description}</h3>
            <h3>{`$${chair.price} per sit`}</h3>
        </div>
    )
}
