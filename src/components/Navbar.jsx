"use client"
import UserContext from '@/context/userContext';
import { logout } from '@/services/userServices';
import Link from 'next/link'
import React, {useContext} from 'react'
import { toast } from 'react-toastify';

const Navbar = () => {
  const context = useContext(UserContext);
  
  async function doLogout(){
    try{
         const result = await logout();
         console.log(result);
         context.setUser(undefined);
    }catch(error){
         toast.error("Logout error")
    }
  }
  return (
    <div>
      <nav className='bg-blue-600 h-12 py-3 px-3 flex justify-between items-center'>
        <div>
          <h1>
            <a href='#'>work manager</a>
          </h1>
        </div>
        <div>
          <ul className='flex space-x-5'>
           {
            context.user && (
              <>
               <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
             <Link href={"/add-task"}>Add Task</Link>
            </li>
            <li>
            <Link href={"/show-task"}>Show Task</Link>
            </li>
              </>
            )
           }
          </ul>
        </div>
        <div>
          <ul className='flex space-x-1'>
            {
              context.user && (
                <>
                <li>
              <Link href={"#!"}>{context.user.name}</Link>
            </li>
            <li>
           <button onClick={doLogout}>Logout</button>
            </li>
                </>
              )
            }

       
       
       {!context.user && (
                <>
                <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
            <Link href={"/signup"}>Sign Up</Link>
            </li>
                </>
              )
            }
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
