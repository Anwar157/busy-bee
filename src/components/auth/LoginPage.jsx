"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { showInfo, showSuccess } from "../alert";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  // 🔑 Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      // 1️⃣ Firebase Auth login
      const result = await signInWithEmailAndPassword(auth, email, password);

      // 2️⃣ Fetch user from MongoDB
      let user = null;
      try {
        const res = await fetch(`/api/user/${result.user.uid}`);
        if (res.ok) {
          user = await res.json();
        } else if (res.status === 404) {
          console.warn("User not found in DB, redirecting to role select");
        }
      } catch (err) {
        console.error("Error fetching user from DB:", err);
      }

      showSuccess(
        "Login Successful",
        `Welcome back! ${result.user.displayName || ""}`,
      );

      // ✅ Role redirect logic
      if (!user || !user.role) {
        router.push("/role-redirect");
      } else {
        router.replace(`/${user.role}/dashboard`);
      }
    } catch (error) {
      let message = "Login failed";

      if (error.code === "auth/user-not-found") {
        message = "এই ইমেইল দিয়ে কোনো একাউন্ট নাই";
      } else if (error.code === "auth/wrong-password") {
        message = "পাসওয়ার্ড ভুল";
      } else if (error.code === "auth/invalid-email") {
        message = "ইমেইল ঠিক নাই";
      }

      showInfo("Login Error", message);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Forgot Password (Firebase Auth)
  const handleForgotPassword = async () => {
    if (!emailForReset) {
      showInfo("Email Required", "আগে ইমেইল লিখো");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailForReset);
      showSuccess(
        "Reset Email Sent",
        "তোমার ইমেইলে পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে",
      );
    } catch (error) {
      showInfo("Reset Failed", "এই ইমেইল দিয়ে কোনো একাউন্ট নাই");
    }
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Login now!</h1>
          </div>

          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmailForReset(e.target.value)}
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer text-gray-500">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="link link-hover text-sm mt-1">
                  Forgot password?
                </button>

                <button className="btn btn-primary mt-4" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
