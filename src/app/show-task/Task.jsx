import UserContext from '@/context/userContext';
import React, { useContext } from 'react'

const Task = ({task}) => {
    const {user}=useContext(UserContext);
  return (
    <div className='bg-gray-800 mt-2 rounded-md'>
        <div className='p-5'> 
        <h1 className='text-2xl font-semibold'>{task.title}</h1>
        <p className='font-normal'>{task.content}</p>
        <p className='text-right'>
            Author: <span className='font-bold'>{user.name}</span>
        </p>
        </div>
    </div>
  )
}

export default Task;