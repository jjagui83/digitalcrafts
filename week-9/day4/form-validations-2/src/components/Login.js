import React from 'react';
import {useState} from 'react';
import { HeaderHeader } from '../StyledComponents/HeaderStyle';
import { FormContainer } from '../StyledComponents/FormStyle';
import { InputContainer} from '../StyledComponents/FormStyle';
import { UsernameInput, Password, LoginInput, Checkbox } from '../StyledComponents/FormStyle';
import { createClient } from '@supabase/supabase-js';
import {useHistory} from "react-router-dom";

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://fusfwunncmaaqwfbaekn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNTA2NCwiZXhwIjoxOTQ2NzgxMDY0fQ.dZnLsILeh9R7ZpGtTBO_tfqUctpL8DR2M4hJlk60agI")
export default function Login(props) {
    const [formData,setFormData] = useState({username:"", password: ""});
    const history = useHistory();
    // console.log(props.register);
    const login = async (e)  => {
      e.preventDefault();
      const {user,session, error} = await supabase.auth.signIn({
        email: formData.username,
        password: formData.password,
      });
     if (session){
       history.push("/dashboard")
     }else {alert(error.message)};
    };

    const register = async (e) => {
      e.preventDefault();
      const {user,session, error} = await supabase.auth.signUp({
        email: formData.username,
        password: formData.password,
      });
      if (user) {
        history.push("/login");
      } else {
        alert(error.message);
      }
    };
    return (
        <FormContainer>
        <HeaderHeader></HeaderHeader>
        <InputContainer>
          <p>Login to continue</p>
          <UsernameInput
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="username"
            name="username"
            value={formData?.username}
          />          
       
          <Password
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="password"
            placeholder="password"
            name="password"
            value={formData?.password}
          />
          <div>
          <Checkbox type="checkbox" id= "me" name="me" />
          <label for="me">Remember me</label>
          </div>
      
                     {props?.register ? (
            <button
              onClick={(e) => register(e)}
              type="submit"
              value=""
            >
              Register
            </button>
          ) : (
            <button onClick={(e) => login(e)} type="submit" value="">
              Log In
            </button>
          )}
       




          
          
          
        </InputContainer>
      </FormContainer>
    )
}


