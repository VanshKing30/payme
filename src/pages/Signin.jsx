import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { InputBox } from '../components/InputBox';
import { ButtonComponent } from '../components/ButtonComponent';
import axios from 'axios';
import { BottomWarning } from '../components/BottomWarning';

export const Signin = () => {

    const[username , setUserName] = useState("");
    const[password , setPassword] = useState("");

    const navigate = useNavigate();

    return(
      <div className='bg-neutral-900 flex justify-center items-center w-full h-screen'>
        <div className='flex flex-col bg-white w-1/4 justify-center items-center rounded-md py-5'>
          <Heading heading={"Sign in"} />
          <Subheading text = {"Enter your credentails to acccess your account"} />
          <InputBox 
            onChange={(e)=>{
              setUserName(e.target.value);
            }}
            title={"Email"}
            placeholder={"user@email.com"}
            type={"email"}
          />

          <InputBox 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          title={"Password"}
          placeholder={"password"}
          type={"password"}
          />

          <ButtonComponent 
            onClick={async ()=>{
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token" , response.data.token);
              navigate("/dashboard");
            }}
            text={"Sign in"}
            />
            <BottomWarning
              label={"Dont have an account?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            />
        </div>
      </div>
    );
}
