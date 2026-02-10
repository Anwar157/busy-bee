"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { showSuccess } from "../alert";
import Logo from "../Logo";

export default function Topbar() {
  const router = useRouter();

  const coins = 1250;
  const userName = auth.currentUser?.name || "Worker";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      showSuccess("Logged Out", "You have been logged out successfully");
      router.push("/"); // 🔥 Home page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="h-16 bg-base-100 border-b flex items-center justify-between px-6">
      {/* Logo */}
      <Logo></Logo>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Coins */}
        <div className="flex items-center gap-1 bg-base-200 px-3 py-1 rounded-full">
          <span>🪙</span>
          <span className="font-semibold">{coins}</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium">{userName}</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="btn btn-sm btn-outline btn-error">
          Logout
        </button>
      </div>
    </header>
  );
}
