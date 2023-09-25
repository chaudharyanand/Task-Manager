"use client"
import UserContext from '@/context/userContext';
import { getTaskofUser } from '@/services/taskServices';
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
const ShowTasks = () => {
const [tasks, setTasks] = useState([]);
const context = useContext(UserContext)
async function loadTasks(userId){
    try{
 const tasks = await getTaskofUser(userId);
 setTasks([...tasks.reverse()]);
    }catch(error){
    console.log(error);
    }
}
    useEffect(()=>{
        if(context){
            loadTasks(context.user._id);
        }
    
    },[context.user]);
  return (
    <div className='grid grid-cols-12 mt-3'>
        <div className='col-span-6 col-start-4'>
        <h1 className='text-3xl text-center'>Your task ({tasks.length})</h1>
        {tasks.map((task)=>(
            <Task task={task} key={task._id}/>
        ))}
        
        </div>
    </div>
  )
}

export default ShowTasks;