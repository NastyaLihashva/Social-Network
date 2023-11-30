import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Anastasia'},
                {id: 4, name: 'Roman'},
                {id: 5, name: 'Ekaterina'},
                {id: 6, name: 'Victor'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello! I miss you'}
            ],
            newMessageText: 'say hello!'
        },
        profilePage:{
            postsData: [
                {id: 1, message: 'Hi! How are you?', likesCount: 10},
                {id: 2, message: 'Im so happy!', likesCount: 16},
                {id: 3, message: 'Its my first post!', likesCount: 21}
            ],
            newPostText: 'hello'
        },
        navbarPage:{
            friends:  [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Anastasia'},
                {id: 4, name: 'Roman'},
                {id: 5, name: 'Ekaterina'},
                {id: 6, name: 'Victor'}
            ],
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;