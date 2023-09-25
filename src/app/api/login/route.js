import { NextResponse } from "next/server";

import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request){
    const { email, password } = await request.json();
    
    try{
        const user = await User.findOne({
           email: email,
        });
        if(user == null){
            throw new Error("user not found");
        }
        //password hash check
        const matched = bcrypt.compareSync(password, user.password);
        if(!matched){
            throw new Error("password not matched");
        }

        // create token
        const token = jwt.sign({
            _id:user._id,
            name:user.name
        },
        process.env.JWT_KEY
        );

        // create nextresponse cookie
        const response=NextResponse.json({
            message:"login success",
            success:true,
            user: user,
        })
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        });




            
        
        console.log(user);
        console.log(token);
        return response;
    }catch(error){
        return NextResponse.json({
            message: error.message,
            success: false,
        },{
            status: 500,
        });
    }
}