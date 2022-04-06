import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ChairForm.css'

export default function NewChairForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState(0);
    return (
        <div className="chair-form">
            <form>
                <h1>Add a Chair!</h1>
                <label className="chairFormLabel">
                    Chair Name
                    <input
                        className="chairFormInput"
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    Description
                    <input
                        className="chairFormInput"
                        type="text"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    Address
                    <input
                        className="chairFormInput"
                        type="text"
                        value={address}
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    City
                    <input
                        className="chairFormInput"
                        type="text"
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    State
                    <input
                        className="chairFormInput"
                        type="text"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    Country
                    <input
                        className="chairFormInput"
                        type="text"
                        value={country}
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </label>
                <label className="chairFormLabel">
                    Price
                    <input
                        className="chairFormInput"
                        type="number"
                        value={price}
                        placeholder="Name"
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Chair</button>

            </form>
        </div>
    )
}
