import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChairCard({ chair }) {
    return (
        <div className="chair-card">
            <h2>{chair.name}</h2>
            <h3>{chair.description}</h3>
            <h3>{`$${chair.price} per sit`}</h3>
        </div>
    )
}
