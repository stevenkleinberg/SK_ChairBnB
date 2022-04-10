import { csrfFetch } from "./csrf";
// --------
// CONSTANT VARIABLES
const ADD_BOOKING = 'bookings/ADD_BOOKING'
const LOAD_USERS_BOOKINGS = 'bookings/LOAD_USERS_BOOKINGS'
const REMOVE_BOOKING = 'bookings/REMOVE_BOOKING'

// --------
// ACTION CREATOR SECTION
export const add = (booking) => ({
    type: ADD_BOOKING,
    booking
})

export const loadUsersBookings = (bookings) => ({
    type:LOAD_USERS_BOOKINGS,
    bookings
})

export const remove = (id) => ({
    type: REMOVE_BOOKING,
    id
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

export const getUsersBookings = (userId) => async dispatch => {
    console.log(userId)
    const response = await csrfFetch(`/api/bookings/${userId}`);

    if (response.ok){
        const bookings = await response.json();
        dispatch(loadUsersBookings(bookings))
        return bookings
    }
}

export const removeBooking = (id) => async dispatch => {

    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {

        dispatch(remove(id));
        return id;
    }
}
// --------
// reducer
const bookingsReducer = (state = {}, action) => {
    switch (action.type){
        case ADD_BOOKING:
            const newState = {
                ...state,
                [action.booking.id]: action.booking
            }
            return newState;
        case LOAD_USERS_BOOKINGS:
            const usersBookings = {}
            action.bookings.forEach( booking => {
                usersBookings[booking.id] = booking;
            })
            return usersBookings;
            case REMOVE_BOOKING:
                const stateCopy = { ...state };
                delete stateCopy[action.id];
                return stateCopy;
        default:
            return state;
    }
}
export default bookingsReducer;
