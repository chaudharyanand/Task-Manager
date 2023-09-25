import { getResponseMessage } from "@/helper/responseMess";
import { NextRequest, NextResponse } from "next/server";
import { Task } from "@/models/task";

//get single task
export async function GET(request, {params}){
    const { taskId } = params;
    try{
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    }catch(error){
        return getResponseMessage("error in getting data", 404, false);
    }
}

export async function PUT(request, { params }) {
    const {taskId} = params;
    const {title, content} = await request.json();
    try{
       const task = await Task.findById(taskId);
       task.title=title;
       task.content=content;
       //task.status=status;
       const updatedTask = await task.save();
       return NextResponse.json(updatedTask);
    }catch(error){
        return getResponseMessage("error in getting data", 404, false);
    }
}

export async function DELETE(request, { params }) {
    try{
         const {taskId} = params;
         await Task.deleteOne({
      _id: taskId,
    });
    return getResponseMessage("success in deleting",200, true);
    }catch(error){
        console.log(error)
        return getResponseMessage("error in deleting", 404, false);
    }
    
}

