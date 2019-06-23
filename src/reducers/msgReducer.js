const initialState = {
    messages: [],
    name: '',
    password: ''
};

export function msgReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case 'msg':
            return{
                ...state,
                messages: [...state.messages, action.payload],
            };
        case 'signUp':
            return{
                ...state,
                name: action.payload.name,
                password: action.payload.password
            }
        default:
            return state;
    }
}