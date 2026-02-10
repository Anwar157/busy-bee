"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import NavLink from "../button/NavLink";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

const Navbar = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [authReady, setAuthReady] = useState(false); // ✅ New: wait for auth
  const router = useRouter();

  // 🔹 Detect when auth is fully ready
  useEffect(() => {
    if (!loading && user?.uid) {
      setAuthReady(true);
    }
  }, [loading, user]);

  // 🔹 Fetch role safely
  useEffect(() => {
    if (!authReady) return;

    const fetchRole = async () => {
      if (!user?.uid) return; // double safety guard

      try {
        const res = await fetch(`/api/user/${user.uid}`, { cache: "no-store" });

        if (!res.ok) {
          console.warn("Role fetch failed:", res.status);
          setRole(null);
          return;
        }

        const data = await res.json();
        const validRole =
          data.role && data.role !== "pending" ? data.role : null;
        setRole(validRole);
      } catch (error) {
        console.error("Role fetch error:", error);
        setRole(null);
      }
    };

    fetchRole();
  }, [authReady, user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading) return null;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-x-4">
        {!user ? (
          <>
            <Link href="/login">
              <button className="btn btn-secondary btn-outline">Login</button>
            </Link>
            <Link href="/signin">
              <button className="btn btn-primary btn-outline">Sign Up</button>
            </Link>
          </>
        ) : role ? (
          <>
            <Link
              href={
                role === "worker"
                  ? "/worker/dashboard"
                  : role === "client"
                    ? "/client/dashboard"
                    : "/"
              }>
              <button className="btn btn-primary btn-outline">Dashboard</button>
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/role-redirect">
              <button className="btn btn-warning btn-outline">
                Select Role
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
