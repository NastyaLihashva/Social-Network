import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    postsData: [
        {id: 1, message: 'Hi! How are you?', likesCount: 10},
        {id: 2, message: 'Im so happy!', likesCount: 16},
        {id: 3, message: 'Its my first post!', likesCount: 21}
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4, 
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        case SET_USER_PROFILE:
            return{
                ...state, 
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state, 
                status: action.status
            }
        case DELETE_POST:
            return{
                ...state, 
                postsData: state.postsData.filter(p => p.id !== action.postId)
            } 
        case SAVE_PHOTO_SUCCESS:
            return{
                ...state, 
                profile: {...state.profile, photos: action.photos}
            } 
        default:
            return state;
    }
}

export const addPostActionCreater = (newPostText) =>({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getProfileThunkCreater = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
    }
}

export const getStatusThunkCreater = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatusThunkCreater = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        let response = await profileAPI.saveProfile(profile);
        if(response.data.resultCode === 0){
            dispatch(getProfileThunkCreater(userId));
        } else {
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
        }
    }
}

export default profileReducer;