let initialState = {
    friends:  [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Anastasia'},
        {id: 4, name: 'Roman'},
        {id: 5, name: 'Ekaterina'},
        {id: 6, name: 'Victor'}
    ]
}

const navbarReducer = (state = initialState, action) =>{
    return state;
}

export default navbarReducer;