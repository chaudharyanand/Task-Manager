import mongoose, { models } from "mongoose";
import { User } from "../models/user";
export const connectDb = async () => {
    try{
       const {connection} = await  mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "anand",
        });
        console.log("db conn");
        console.log(connection);
        //testing
        const uuser = new User({
            name: "test name",
            email:"test@123",
            password: "123456",
            about:"aannand",
        });
        await uuser.save();
        console.log("user is created");
     
    }catch(error){
        console.log("failed to connect");
        console.log(error);
    }
};