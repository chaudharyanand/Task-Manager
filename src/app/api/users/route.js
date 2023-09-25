import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs"

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();
  console.log({ name, email, password, about, profileURL });

  //create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  try {
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    const createUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log("error");
    return NextResponse.json({
      message: "failed",
      status: false,
    }, {
      status: 500,
    }
    );
  }
}
