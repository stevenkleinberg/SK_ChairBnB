import { csrfFetch } from "./csrf";
// --------
// CONSTANT VARIABLES
const LOAD_CHAIRS = 'chairs/LOAD_CHAIRS'
const ADD_CHAIR = 'chairs/ADD_CHAIR'
const REMOVE_CHAIR = 'chairs/REMOVE_CHAIR'


// --------
// ACTION CREATOR SECTION
export const load = chairs => ({
    type: LOAD_CHAIRS,
    chairs,
});
export const add = (chair) => ({
    type: ADD_CHAIR,
    chair
});
export const remove = (id) => ({
    type: REMOVE_CHAIR,
    id
})


// --------
// THUNK ACTION CREATOR SECTION

//gets all chairs
export const getChairs = () => async dispatch => {
    const response = await csrfFetch('/api/chairs');

    if (response.ok) {
        const chairs = await response.json();
        dispatch(load(chairs))
        return chairs
    }
}

export const getOneChair = (id) => async dispatch => {
    const response = await csrfFetch(`/api/chairs/${id}`);

    if (response.ok) {
        const chair = await response.json();
        dispatch(add(chair))
        return chair
    }
}

export const editChair = (payload) => async dispatch => {
    const id = payload.id;
    const response = await csrfFetch(`/api/chairs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const chair = await response.json();
        dispatch(add(chair));
        return chair;
    }
}

export const addChair = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/chairs/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const chair = await response.json();
        dispatch(add(chair));
        return chair;
    }
}

export const addChairImage = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/images/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const chairId = await response.json();
        dispatch(getOneChair(chairId));
        return chairId;
    }
}

export const removeChair = (id) => async dispatch => {

    const response = await csrfFetch(`/api/chairs/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {

        dispatch(remove(id));
        return id;
    }
}
// --------
// reducer
const chairsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_CHAIRS:
            const chairs = {};
            action.chairs.forEach(chair => {
                chairs[chair.id] = chair;
            });
            return { ...state, ...chairs }
        case ADD_CHAIR:
            const newState = {
                ...state,
                [action.chair.id]: action.chair
            }
            return newState;
        case REMOVE_CHAIR:
            const stateCopy = { ...state };
            delete stateCopy[action.id];
            return stateCopy;
        default:
            return state;
    }
}
export default chairsReducer;
