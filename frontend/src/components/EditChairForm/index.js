import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { editChair } from "../../store/chair";
// import './ChairForm.css'

export default function EditChairForm() {
    const params = useParams()
    const { id } = params
    const chair = useSelector(state => {
        return state.chairs[id]
    });
    const [name, setName] = useState(chair.name)
    const [description, setDescription] = useState(chair.description)
    const [address, setAddress] = useState(chair.address)
    const [city, setCity] = useState(chair.city)
    const [state, setState] = useState(chair.state)
    const [country, setCountry] = useState(chair.country)
    const [price, setPrice] = useState(chair.price);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...chair,
            name,
            description,
            address,
            city,
            state,
            country,
            price
        }

        let updatedChair;
        updatedChair = await dispatch(editChair(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (updatedChair) {
            history.replace(`/chairs/${id}`)
        }
    }

    return (
        <div className="chair-form-wrapper">

            <div className="chair-form-card">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Your Chair!</h1>
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
                        </div>
                        <div>
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
                        </div>
                    </div>
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
                    <button className="booking-card__btn" ><NavLink className="chair-edit-cancel-navlink" to={`/chairs/${id}`}></NavLink>Cancel</button>
                    <button className="booking-card__btn" type="submit">Save Changes</button>

                </form>
            </div>
        </div>

    )
}
