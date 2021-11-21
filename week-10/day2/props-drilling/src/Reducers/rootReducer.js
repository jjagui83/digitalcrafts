const initialState = {
    mustang: "1967 Mustang Boss 302",
    fordGt: "2021 Ford Gt",
    bugatti:"2021 Bugatti Chiron",
    kawasaki: "zrx1200"
}


const rootReducer = (state=initialState, action) => {
    switch(action.type){


        case "GET BUGATTI":
            return state.bugatti;
        case "GET FORDGT":
            return state.fordGt;
        case "GET MUSTANG":
            return state.mustang;
        case "CHANGE KAWASAKI":
            return {...state, kawasaki: "ninja 250"};
        default:
            return state
    }
};
export default rootReducer;