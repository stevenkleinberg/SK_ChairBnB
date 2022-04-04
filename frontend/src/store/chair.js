// --------
// CONSTANT VARIABLES
const LOAD_CHAIRS = 'chairs/LOAD_CHAIRS'

// --------
// ACTION CREATOR SECTION
export const loadChairs = chairs =>({
    type: LOAD_CHAIRS,
    chairs,
});

// --------
// THUNK ACTION CREATOR SECTION
export const getChairs = () => async dispatch => {
    const response = await fetch('api/chairs');

    if (response.ok){
        const chairs = await response.json();
        dispatch(loadChairs(chairs))
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
            return { ...state, chairs: chairs}
        default:
            return state;
    }
}
export default chairsReducer;
