import { csrfFetch } from "./csrf";
// --------
// CONSTANT VARIABLES
const LOAD_CHAIRS = 'chairs/LOAD_CHAIRS'
const ADD_CHAIR = 'chairs/ADD_CHAIR'

// --------
// ACTION CREATOR SECTION
export const loadChairs = chairs =>({
    type: LOAD_CHAIRS,
    chairs,
});
export const addOneChair = (chair) => ({
    type: ADD_CHAIR,
    chair
})


// --------
// THUNK ACTION CREATOR SECTION

//gets all chairs
export const getChairs = () => async dispatch => {
    const response = await csrfFetch('/api/chairs');

    if (response.ok){
        const chairs = await response.json();
        dispatch(loadChairs(chairs))
        return chairs
    }
}

export const getOneChair = (id) => async dispatch => {
    console.log(id)
    const response = await csrfFetch(`/api/chairs/${id}`);

    if (response.ok){
        const chair = await response.json();
        dispatch(addOneChair(chair))
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

    if(response.ok){
        const chair = await response.json();
        dispatch(addOneChair(chair));
        return chair;
    }
}

export const addChair = (payload) => async dispatch => {
    console.log('newchairTHUNK')
    const response = await csrfFetch(`/api/chairs/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if(response.ok){
        const chair = await response.json();
        dispatch(addOneChair(chair));
        return chair;
    }
}
// --------
// reducer
const chairsReducer = (state = {}, action) =>{
    switch (action.type) {
        case LOAD_CHAIRS:
            const chairs = {};
            console.log("action.chairs pre foreach", action.chairs)
            action.chairs.forEach(chair => {
                chairs[chair.id] = chair;
            });
            return { ...state, ...chairs}
        case ADD_CHAIR:
                const newState = {
                    ...state,
                    [action.chair.id]: action.chair
                }
                return newState;

        default:
            return state;
    }
}
export default chairsReducer;
