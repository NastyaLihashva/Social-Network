const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 1, message: newMessage}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreater = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;