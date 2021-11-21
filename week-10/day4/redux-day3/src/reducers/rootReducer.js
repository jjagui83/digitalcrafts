import {combineReducers} from "redux";
import SignUpFormData from "./signUpForm";
import Counter from "./counter";
import matchUP from "./matchUP";
import CurrentLiveMatch from "./CurrentLiveWatch";
import newsArticles from "./newsArticles";




// const initialState = {
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
// }
const rootReducer = combineReducers( {
    SignUpFormData, Counter, CurrentLiveMatch, newsArticles, matchUP,
    // switch(action.type){
    //     case "SIGNUPFROM_FIRSTNAME":
    //         return{ ...state, firstName:action.payload};
    //     case "SIGNUPFROM_LASTNAME":
    //             return{ ...state, lastName:action.payload};
    //     case "SIGNUPFROM_EMAIL":
    //                 return{ ...state, email:action.payload};
    //     case "SIGNUPFROM_PASSWORD":
    //         return{ ...state, password:action.payload};

    //     default:
    //         return state}

});
export default rootReducer;