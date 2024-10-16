const initialState = {
    isLoggedIn: false,
    userId: null,
    email: null,
  };

const authReducer = (state = initialState,action) =>{


    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isLoggedIn: true,
                userId: action.payload.userId,
                email: action.payload.email
            };
        case 'LOGOUT':
            return{
                ...state,
                isLoggedIn:false,
                userId: null,
                email: null
            };
        default:
            return state;

    }
}

export default authReducer;