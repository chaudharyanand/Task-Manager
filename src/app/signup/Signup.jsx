"use client"
import { signUp } from '@/services/userServices';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
export const metadata = {
    title:"Sign In: work manage",
  };
const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email:"",
        password:"",
        about:"",
        profileURL:"https:anand.com/anand",
    });
    const doSign = async (event) => {
       event.preventDefault();
       console.log(event);
       console.log(data);
       if(data.name.trim()=="" || data.name == null){
        toast.warning("Name is Required");
        return;
       };
       if (!validatePassword(data.password)) {
        toast.warning("Password must be at least 8 characters long, contain at least one capital letter, one number, and one special character");
        return;
        }
        //form submit
      try{
        const result = await signUp(data);
        console.log(result);
        toast.success("user is registered",{
            position: 'top-center',
        });
        setData({
            name: "",
            email:"",
            password:"",
            about:"",
            profileURL:"https:anand.com/anand", 
        })
      }catch(error){
        console.log(error)
        toast.error("sign up error")

      }


    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const validatePassword = (password) => {
        return passwordRegex.test(password);
    };
    //reset form
    const resetForm = () =>{
        setData({
            name: "",
            email:"",
            password:"",
            about:"",
            profileURL:"https:anand.com/anand", 
        });
    }
      
  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-4 col-start-5'>
        <h1 className='justify-center text-center'>Sign Up Here</h1>
        <form action='!#' className='mt-5' onSubmit={doSign}>
            <div className='mt-3'>
                <label htmlFor='user_name'>Username</label>
                <input 
                type='text'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_name'
                name="user_name"
                onChange={(event)=>{
                    setData({
                        ...data,
                        name: event.target.value,
                    });
                }}
                value={data.name}
                />
            </div>
            <div className='mt-3'>
                <label htmlFor='user_email'>Email</label>
                <input 
                type='email'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_email'
                name="user_email"
                onChange={(event)=>{
                    setData({
                        ...data,
                        email: event.target.value,
                    });
                }}
                value={data.email}
                />
            </div>
            <div className='mt-3'>
                <label htmlFor='user_email'>Password</label>
                <input 
                type='password'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_password'
                name="user_password"
                onChange={(event)=>{
                    setData({
                        ...data,
                        password: event.target.value,
                    });
                }}
                value={data.password}
                />
            </div>
            <div className='mt-3'>
                <label htmlFor='user_email'>About</label>
                <textarea
                type='text'
                className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                placeholder='enter username'
                id='user_about'
                name="user_name"
                onChange={(event)=>{
                    setData({
                        ...data,
                        about: event.target.value,
                    });
                }}
                value={data.about}
                rows={2}
                ></textarea>
            </div>
            <div className='mt-4 flex justify-center'>
                  <button type="submit" className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Submit</button>
                  <button onClick={resetForm} className='bg-red-600 py-2 px-5 ml-2 rounded-lg hover:bg-blue-800'>Reset</button>
                  
            </div>
        </form>
        
        </div>
        </div>
  )
};

export default Signup;