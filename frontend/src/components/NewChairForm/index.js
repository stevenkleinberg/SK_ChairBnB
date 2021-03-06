import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import './ChairForm.css'
import { addChair } from "../../store/chair";

export default function NewChairForm() {
    const sessionUser = useSelector(state => state.session.user);
    let userId;
    if (sessionUser) {
        userId = sessionUser.id;
    }

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState(0);
    const [url, setUrl] = useState('')
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch()
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            name,
            description,
            address,
            city,
            state,
            country,
            price,
            url,
        }

        let newChair;
        newChair = await dispatch(addChair(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (newChair) {
            history.push(`/chairs/${newChair.id}`)
        }
    }
    if (!sessionUser) {
        return (
            <div>
                <h1>Please log in or sign up to add a chair!</h1>
            </div>
        )
    }
    return (
        <div className="chair-form-wrapper">

            <div className="chair-form-card">
                <form onSubmit={handleSubmit}>
                    <h1>Add a Chair!</h1>
                    <ul className="errorsList">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="chair-form-card-inputs-container">
                        <div>

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
                        </div>
                        <div>

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
                            <label className="chairFormLabel">
                                Image Url
                                <input
                                    className="chairFormInput"
                                    type="text"
                                    value={url}
                                    placeholder="Image Url"
                                    onChange={(e) => setUrl(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <button  className="booking-card__btn" type="submit">Add Chair</button>

                </form>
            </div>
        </div>
    )
}
