import { getAuthThunkCreater } from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});


export const initializeAppThunkCreater = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthThunkCreater());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        });
    }
}



export default appReducer;