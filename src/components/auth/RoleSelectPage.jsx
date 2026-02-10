"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { showInfo, showSuccess } from "@/components/alert";
import { onAuthStateChanged } from "firebase/auth";

export default function RoleSelectPage() {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔐 Wait for Firebase auth to be fully ready
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const handleSelectRole = async (role) => {
    // 🛑 Double safety guard
    if (!authReady) {
      showInfo("Please wait", "অথেন্টিকেশন এখনো প্রস্তুত হয়নি");
      return;
    }

    if (!currentUser?.uid) {
      showInfo("Login Required", "অনুগ্রহ করে আগে লগইন করুন");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/user/${currentUser.uid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
        cache: "no-store",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Role update failed");
      }

      showSuccess("Role Selected", "আপনার রোল সফলভাবে সেট হয়েছে");

      // 🔁 Redirect after success
      setTimeout(() => {
        router.replace(`/${role}/dashboard`);
      }, 300);
    } catch (error) {
      console.error("Role update error:", error);
      showInfo("Error", error.message || "রোল সেট করা যায়নি");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-3xl w-full bg-base-100 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          আপনার রোল সিলেক্ট করুন
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WORKER */}
          <div
            onClick={() => authReady && handleSelectRole("worker")}
            className={`border rounded-xl p-6 transition-all
              ${
                authReady
                  ? "cursor-pointer hover:shadow-lg"
                  : "opacity-50 pointer-events-none"
              }`}>
            🧑‍🔧 <h2 className="text-lg font-semibold mt-2">আমি কাজ করতে চাই</h2>
          </div>

          {/* CLIENT */}
          <div
            onClick={() => authReady && handleSelectRole("client")}
            className={`border rounded-xl p-6 transition-all
              ${
                authReady
                  ? "cursor-pointer hover:shadow-lg"
                  : "opacity-50 pointer-events-none"
              }`}>
            🧑‍💼 <h2 className="text-lg font-semibold mt-2">আমি কাজ দিতে চাই</h2>
          </div>
        </div>

        {/* Status */}
        {loading && (
          <p className="text-center mt-4 text-primary">
            আপনার রোল সেট করা হচ্ছে...
          </p>
        )}

        {!authReady && (
          <p className="text-center mt-4 text-gray-500">
            লগইন যাচাই করা হচ্ছে...
          </p>
        )}
      </div>
    </div>
  );
}
