import React, {useState} from 'react';
import "./signUpStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { ConsoleLogVariable, IncrementCounter, DecrementCounter} from "..//actions/SignUpFormActions.js";


export default function SignUpForm() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.Counter)
    return (
        <div className="signupform">
            <form action="">
                <input onChange={(e) => dispatch({type:"SIGNUPFORM_FIRSTNAME",payload:e.target.value})} type="text" placeholder="First Name"/>
                <input onChange={(e) => dispatch({type:"SIGNUPFORM_LASTNAME",payload:e.target.value})} type="text" placeholder="Last Name" />
                <input onChange={(e) => dispatch({type:"SIGNUPFORM_EMAIL",payload:e.target.value})} type="text" placeholder="Email"/>
                <input onChange={(e) => dispatch({type:"SIGNUPFORM_PASSWORD",payload:e.target.value})} type="password" placeholder="Password"/>
                <input type="submit" />
            </form>
            {counter}
            <button onClick= {() => IncrementCounter(dispatch,"incremented")}>Increment Counter</button>
            <button onClick= {()=> DecrementCounter(dispatch, "decremented")}>Decrement Counter</button>
            <button onClick={()=> ConsoleLogVariable("Jose")}>Print to console</button>
        </div>
    )
}
