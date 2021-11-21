const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password:"",
}

const SignUpFormData = (state=initialState, action) => {
    switch(action.type){
        case "SIGNUPFROM_FIRSTNAME":
            return{ ...state, firstName:action.payload};
        case "SIGNUPFROM_LASTNAME":
                return{ ...state, lastName:action.payload};
        case "SIGNUPFROM_EMAIL":
                    return{ ...state, email:action.payload};
        case "SIGNUPFROM_PASSWORD":
            return{ ...state, password:action.payload};

        default:
            return state}
};

export default SignUpFormData;