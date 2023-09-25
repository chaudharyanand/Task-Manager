import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// get all tasks
export async function GET(request) {
    try{
        const task = await Task.find();
        return NextResponse.json(task);
    } catch (error){
        console.log(error);
        return "error in getting data", 404, false;
    }
}
// create all tasks
export async function POST(request) {
  const { title, content, userId } = await request.json();
  const authToken = request.cookies.get("authToken")?.value;
//console.log("authToken");
const data=jwt.verify(authToken, process.env.JWT_KEY);
//console.log("data");
  try {
    const task = new Task({
      title,
      content,
      userId:data._id,
    });
    const Createdtask = await task.save();
    return NextResponse.json(Createdtask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "failed to create tasks",
      status: false,
    });
  }
}
