"use client";
import { addTask } from '@/services/taskServices';
import React, { useState } from 'react'
import taskSvg from "../../assest/task.svg";
import Image from 'next/image';
import { toast } from 'react-toastify';


const AddTask = () => {

 const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64d3d2bb73bb556ea9fa400a",
  });
  const handleAddTask = async (event) => {
     event.preventDefault();
     console.log(task);
  {/*validate*/}
  try{
    const result = await addTask(task)
    console.log(result);
    toast.success("your task is added !!",{
      position: "top-center",
    });
    setTask({
      title: "",
      content: "",
      status: "",

    });
  }catch(error){
      return "error in data",404,false;
  }
  };
  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 border border-red-400 p-5 shadow-sm'>
        {/*
        <div className='my-2'>
          <Image src={taskSvg}
          styel={{
            width: "50%",
            }}
            alt='login'
          /></div>*/}
<img src='/assest/task2.png' />
          
        
           <h1 className='text-3xl justify-center text-center'>Add your task </h1>

           <form action="#!" onSubmit={handleAddTask}>
            <div className='mt-4'>
                 <label
                 htmlFor='task_title'
                 className='block text-sm font-medium mb-2'
                 >
                  Title
                 </label>
                 <input type='text' className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100'
                  id='task_title'
                  name="task_title"
                  onChange={(event) => {
                    setTask({
                      ...task,
                      title: event.target.value,
                    });
                  }}
                  value={task.title}
                  />
            </div>
               {/*Task content */}
               <div className='mt-4'>
                 <label
                 htmlFor='task_content'
                 className='block text-sm font-medium mb-2'
                 >
                  Content
                 </label>
                 <textarea className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100'
                  id='task_content' row={5} 
                  name="task_content"
                  onChange={(event) => {
                    setTask({
                      ...task,
                      content: event.target.value,
                    });
                  }}
                  value={task.content}
                  ></textarea>
                </div> 
                {/*status*/} 
                <div className='mt-4'>
                 <label
                 htmlFor='task_content'
                 className='block text-sm font-medium mb-2'
                 >
                  Status
                 </label>
                <select id="task_status" className='w-full p-3 rounded-full bg-gray-800 focus:rind-red-100 text-white'
                 name="task_status"
                 onChange={(event) => {
                   setTask({
                     ...task,
                     status: event.target.value,
                   });
                 }}
                 value={task.status}
                >
                  <option value="none"  disabled>---Select Status ----</option>
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                </select>
                </div>
                {/*Button */}
                <div className='mt-4 flex justify-center'>
                  <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
                  <button className='bg-red-600 py-2 px-5 ml-2 rounded-lg hover:bg-blue-800'>Clear</button>
                  
                </div>
           </form>
      </div>
    </div>
    
  );
};
export default AddTask;