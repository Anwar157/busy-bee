import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { uid, name, email } = await req.json();

    // 🔹 Required fields check
    if (!uid || !email) {
      return NextResponse.json(
        { message: "uid and email are required" },
        { status: 400 }
      );
    }

    // 🔹 Check if user already exists by uid OR email
    const existingUser = await User.findOne({ $or: [{ uid }, { email }] });
    if (existingUser) {
      return NextResponse.json(
        {
          uid: existingUser.uid,
          role: existingUser.role,
          name: existingUser.name,
          email: existingUser.email,
          message: "User already exists",
        },
        { status: 200 }
      );
    }

    // 🔹 Create new user
    const user = await User.create({
      uid,
      name: name || "",
      email,
      role: null,
    });

    return NextResponse.json(
      {
        uid: user.uid,
        role: user.role,
        name: user.name,
        email: user.email,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("USER CREATE ERROR:", error);

    // 🔹 Duplicate key error handling
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "User with this email or uid already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
