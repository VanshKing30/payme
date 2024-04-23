import React from 'react'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { InputBox } from '../components/InputBox';
import { ButtonComponent } from '../components/ButtonComponent';
import { BottomWarning } from '../components/BottomWarning';
import axios from 'axios';



export const Signup = () => {

    const[firstName , setFirstName ] = useState("");
    const[lastName , setLastName] =  useState("");
  const[username , setUserName] = useState("");
  const[password , setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className='bg-neutral-900 text-slate-50 flex justify-center items-center w-full h-screen'>
        <div className='flex flex-col text-neutral-900 bg-white w-1/4 justify-center items-center rounded-md py-5'>
            <Heading heading = {"Signup"}/>
            <Subheading text ={"Enter your information to create an account"}/>
            <InputBox   
                onChange={(e)=>{
                    setFirstName(e.target.value);
                }}
                title = {"First Name"}
                placeholder={"John"}
                type={"text"}
            />
             <InputBox   
                onChange={(e)=>{
                    setLastName(e.target.value);
                }}
                title = {"Last Name"}
                placeholder={"Doe"}
                type={"text"}
            />
             <InputBox   
                onChange={(e)=>{
                    setUserName(e.target.value);
                }}
                title = {"Email"}
                placeholder={"user@email.com"}
                type={"email"}
            />
             <InputBox   
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                title = {"Password"}
                placeholder={"password"}
                type={"password"}
            />

            <ButtonComponent
                onClick={async ()=>{
                    const response = await axios.post(
                        "https://localhost:3000/api/v1/user/signup",
                        {
                            username ,
                            password,
                            firstName,
                            lastName,
                        }
                    );
                    localStorage.setItem("token" , response.data.token);
                    navigate("/dashboard")
                }}
                text = {"Sign up"}
            />

            <BottomWarning 
                label={"Alredy have an account?"}
                buttonText={"Sign in"}
                to={"/signin"}
            />

            

        </div>
        
    </div>
  )
}
