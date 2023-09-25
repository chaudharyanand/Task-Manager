import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request){
const authToken = request.cookies.get("authToken")?.value;
console.log("authToken");
const data=Jwt.verify(authToken, process.env.JWT_KEY);
console.log("data");
const user = await User.findById(data._id).select("-password");
//console.log("test");
return NextResponse.json(user);
}