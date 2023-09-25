import { NextResponse } from "next/server";
import { User } from "@/models/user";

// get single user by id
export async function GET(request, { params }) {
  const { userId } = params;
  const user = await User.findById(userId);
  return NextResponse.json(user);
}

// delete single user by id
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      Message: "user deleted",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      Message: "delete tesing",
      status: false,
    });
  }
}

// update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser, {
        status: 201,
    
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to update",
      success: false,
    });
  }
}
