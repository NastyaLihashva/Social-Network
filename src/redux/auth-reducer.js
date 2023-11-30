import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA , data:{id, email, login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getAuthThunkCreater = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authAPI.getAuth();
        dispatch(toggleIsFetching(false));
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true));
        }
    }
}

export const loginThunkCreator = (email, password, rememberMe) =>{
    return async (dispatch) =>{
        let response = await authAPI.login(email, password, rememberMe);
        if(response.data.resultCode === 0){
            dispatch(getAuthThunkCreater())
        }
        else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const logoutThunkCreator = () =>{
    return async (dispatch) =>{
        let response = await authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;