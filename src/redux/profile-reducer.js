import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
        default:
            return state;
    }
}

export const addPostActionCreater = (newPostText) =>({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});


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

export default profileReducer;