import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// 🔹 GET /api/user/[uid]
export async function GET(req, { params }) {
  try {
    await connectDB();

    // ✅ safe access to uid
    const uid = params?.uid;

    if (!uid) {
      return NextResponse.json(
        { message: "UID is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ uid });
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
     console.log("UID from params:", uid);

    return NextResponse.json({
      uid: user.uid,
      role: user.role || null,
      name: user.name,
      email: user.email,
    });
   

  } catch (error) {
    console.error("GET USER ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// 🔹 PATCH /api/user/[uid]
export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const { uid } = await params;

    if (!uid) {
      return NextResponse.json(
        { message: "UID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { role } = body;

    if (!role) {
      return NextResponse.json(
        { message: "Role is required" },
        { status: 400 }
      );
    }

    const validRoles = ["worker", "client", "admin"];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { message: "Invalid role value" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      { uid },
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      uid: updatedUser.uid,
      role: updatedUser.role,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } catch (error) {
    console.error("PATCH USER ROLE ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
