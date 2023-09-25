import { getResponseMessage } from "@/helper/responseMess";
import { Task } from "@/models/task";
import { NextFetchEvent, NextResponse } from "next/server";

export async function GET(request, {params}){
    const{userId} = params;
    try{
        const tasks = await Task.findById({
            userId: userId,

        });
        return NextResponse.json(tasks);
    }catch(error){
        return getResponseMessage("error",500,false);
    }
}