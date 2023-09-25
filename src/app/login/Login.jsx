"use client"
import React, { useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { login } from '@/services/userServices';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';
import { useContext } from 'react';
const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const loginFormSub = async (event) =>{
        event.preventDefault();
        console.log(event);
        console.log(loginData);
        if(loginData.email.trim() === "" || loginData.password.trim() === ''){
            toast.info("enter valid email",{
                position: "top-center",
            });
            return;
        }

        //valid data
        try{
          const result = await login(loginData);
          console.log(result);
         toast.success("user is Logined");
         context.setUser(result.user);
         router.push("/profile/user");
        }catch(error){
            console.log(error);

            toast.error(error.response.data.message,{
                position: "top-center",
            });
        }

    }
  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-4 col-start-5'>
        <h1 className='justify-center text-center'>Login</h1>
        <form action='#!' onSubmit={loginFormSub}>
        <div className='mt-3'>
                <label htmlFor='user_email'>Email</label>
                <input 
                type='email'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_email'
                name="user_email"
                onChange={(event)=>{
                    setLoginData({
                        ...loginData,
                        email: event.target.value,
                    });
                }}
                value={loginData.email}
                />
            </div>
            <div className='mt-3'>
                <label htmlFor='user_password'>Password</label>
                <input 
                type='password'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_password'
                name="user_password"
                onChange={(event)=>{
                    setLoginData({
                        ...loginData,
                        password: event.target.value,
                    });
                }}
                value={loginData.password}
                />
            </div>
            <div className='mt-4 flex justify-center'>
               <button type="submit" className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Submit</button>
            </div>      

        </form>
    </div>    
    </div>
  )
}

export default Login;