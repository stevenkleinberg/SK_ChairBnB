import { csrfFetch } from "./csrf";
// --------
// CONSTANT VARIABLES
const ADD_BOOKING = 'bookings/ADD_BOOKING'

// --------
// ACTION CREATOR SECTION
export const add = (booking) => ({
    type: ADD_BOOKING,
    booking
})


// --------
// THUNK ACTION CREATOR SECTION

export const addBooking = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const booking = await response.json();
        dispatch(add(booking));
        return booking;
    }
}

const bookingsReducer = (state = {}, action) => {
    switch (action.type){
        case ADD_BOOKING:
            const newState = {
                ...state,
                [action.booking.id]: action.booking
            }
            return newState;
        default:
            return state;
    }
}
export default bookingsReducer;
