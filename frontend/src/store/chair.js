
// --------
// ACTION CREATOR SECTION
export const loadChairs = chairs =>({
    type: LOAD_CHAIRS,
    chairs
});


// -------
// THUNK ACTION CREATOR SECTION
const chairsReducer = (state = {}, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}
export default chairsReducer;
