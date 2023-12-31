import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux"; 
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, 
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

/*let store = createStore(reducers, applyMiddleware(thunkMiddleware));*/

/*window.store = store;*/

export default store;