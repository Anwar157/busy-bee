"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { showInfo, showSuccess } from "../alert";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 1️⃣ Firebase Auth Create User
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      // 2️⃣ Update Profile
      await updateProfile(result.user, {
        displayName: data.name,
        photoURL: "https://i.ibb.co/9nL9y1G/avatar.png",
      });

      // 3️⃣ Save user in MongoDB (role=null)
      try {
        console.log("Creating user in MongoDB:", result.user.uid);
        const res = await fetch("/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: result.user.uid,
            name: data.name,
            email: data.email,
          }),
        });

        const userData = await res.json();

        if (!res.ok) {
          console.error(
            "MongoDB user create/fetch failed:",
            res.status,
            userData,
          );
          showInfo(
            "User Error",
            `MongoDB তে user create/fetch হয়নি: ${userData?.message || "Unknown error"}`,
          );
        } else {
          console.log("User created or fetched:", userData);
        }
      } catch (err) {
        console.error("MongoDB fetch error:", err);
        showInfo(
          "User Error",
          `MongoDB তে user create/fetch করা যায়নি: ${err.message || err}`,
        );
      }

      showSuccess("Account Created", `Welcome ${data.name}`);
      reset();

      // 4️⃣ Always redirect to Role Selection
      router.push("/role-redirect");
    } catch (error) {
      let message = "Something went wrong";

      if (error.code === "auth/email-already-in-use") {
        message = "এই ইমেইল দিয়ে আগেই একাউন্ট আছে, লগইন করো";
      } else if (error.code === "auth/weak-password") {
        message = "পাসওয়ার্ড কমপক্ষে ৬ ডিজিট হতে হবে";
      } else if (error.code === "auth/invalid-email") {
        message = "ইমেইল ঠিক ফরম্যাটে নাই";
      }

      console.error("Firebase signup error:", error);
      showInfo("Sign Up Failed", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-base-100 px-4 items-center min-h-screen">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

          <button
            className="btn btn-outline w-full flex items-center gap-2"
            onClick={() => showInfo("Google Sign In", "Google login later")}>
            <FcGoogle size={22} /> Continue with Google
          </button>

          <div className="divider">OR</div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col">
            <div>
              <label>Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label>Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-10"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && (
                <p className="text-error text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
