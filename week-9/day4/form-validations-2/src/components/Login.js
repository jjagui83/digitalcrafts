import React from 'react';
import {useState} from 'react';
import { HeaderHeader } from '../StyledComponents/HeaderStyle';
import { FormContainer } from '../StyledComponents/FormStyle';
import { InputContainer} from '../StyledComponents/FormStyle';
import { UsernameInput, Password, LoginInput } from '../StyledComponents/FormStyle';

export default function Login() {
    const [formData,setFormData] = useState({});
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

          <LoginInput
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Login"
            name="login"
            value={formData?.login}
          />


          <div>
            <input type="submit" />
          </div>
        </InputContainer>
      </FormContainer>
    )
}


