const initialState = {   
    userName: "",
    userEmail: "",
    userAddress: "",
    restaurants: "",
    userData: {},};


const getUsers = (state=initialState,action)=>{
    switch (action.type){
        case "SET_USERNAME":
            return {...state, userName: "Makiah"};

        case "SET_EMAIL":
            return {...state, userEmail: "jojo@email.com"};
        case "SET_ADDRESS":
                return {...state, userAddress: "123 Main St"};
        case "SET_RESTAURANTS":
            return {...state, userRestaurants: action.payload};

        case "GET_USER":
            return {...state, userData: action.payload};
         case "GET_PICTURE":
             return {...state, userPicture: action.payload};
        default:
            return state;
    }
};

export default getUsers