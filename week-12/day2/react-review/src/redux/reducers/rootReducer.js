// warehouse department where all employers getsssigned

// import data from "../../data";

const initialState = {
    counter: 0,
    students: [  {name: "Jose"},
    {name: <img src="https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4318000/altimages/ff_4318747-321ce547e2f5c79c4c64alt1_full.jpg&w=900"></img>,
     item: "Houston Astros Navy",
    price: 44.95},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
    {name: "Pamela"},
    {name: "Jenny"},],  
    
};


function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_STUDENTS":
            return state;
        
        case "THE_COUNTER":
            return {...state, counter:state.counter + action.payload}

        
      default:      
        return state
    }
};


export default rootReducer