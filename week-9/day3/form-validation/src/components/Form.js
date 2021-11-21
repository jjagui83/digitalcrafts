import {useState} from "react";


function Form() {
    const [signupForm,setSignupForm] = useState({});

    // const obj1 ={firstName: "Jose"}
    // const obj2 = {lastName: "Aguilar"}
    // const obj2 
    return (
    <div>
        <h1>LinkedIn Signup Form</h1>
        <form action="">
            <input type="text" onChange={(e) => setSignupForm({...signupForm,[e.target.name]: e.target.value})} name="firtName" placeholder="First name" />
            <input type="text" onChange={(e) => setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="lastName" placeholder="Last name" />
            <input type="text" onChange={(e) => setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="email" placeholder="Email" />
            <input type="text" onChange={(e) => setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="street" placeholder="Street" />
            <input type="text" onChange={(e) => setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="city" placeholder="City" />
            <input type="text" onChange={(e) => setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="state" placeholder="State" />
            <input type="button" value="Submit" />
            

        </form>

    </div>
    
    );
}
export default Form;