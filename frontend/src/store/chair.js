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
    const response = await fetch('/api/chairs');

    if (response.ok){
        const chairs = await response.json();
        dispatch(loadChairs(chairs))
    }
}

export const getOneChair = (id) => async dispatch => {
    console.log(id)
    const response = await fetch(`/api/chairs/${id}`);

    if (response.ok){
        const chair = await response.json();
        dispatch(addOneChair(chair))
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
            if(!state[action.chair.id]){
                const newState = {
                    ...state,
                    [action.chair.id]: action.chair
                }
                return newState;
            }
            return state;
        default:
            return state;
    }
}
export default chairsReducer;
