"use client";
import React from "react";

const dummyUser = {
  name: "Anwar Hossen",
  email: "anwar@example.com",
  workerId: "WB-2026-001",
  joined: "01 Jan 2026",
  phone: "+880 1234-567890",
  country: "Bangladesh",
  paymentMethod: "bKash",
  totalTasks: 50,
  approved: 42,
  rejected: 8,
  earnings: 8500,
};

const Profile = () => {
  const successRate = Math.round(
    (dummyUser.approved / dummyUser.totalTasks) * 100,
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
          {dummyUser.name.charAt(0)}
        </div>

        <div>
          <h1 className="text-xl font-bold">{dummyUser.name}</h1>
          <p className="text-gray-500 text-sm">{dummyUser.email}</p>
          <p className="text-gray-400 text-sm">
            Worker ID: {dummyUser.workerId}
          </p>
          <p className="text-gray-400 text-sm">Joined: {dummyUser.joined}</p>
        </div>

        <div className="ml-auto">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            Active
          </span>
        </div>
      </div>

      {/* Performance Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <h2 className="text-xl font-bold">{dummyUser.totalTasks}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Approved</p>
          <h2 className="text-xl font-bold text-green-600">
            {dummyUser.approved}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Rejected</p>
          <h2 className="text-xl font-bold text-red-500">
            {dummyUser.rejected}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Success Rate</p>
          <h2 className="text-xl font-bold text-blue-600">{successRate}%</h2>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-2">Total Earnings</h2>
        <p className="text-2xl font-bold text-green-600">
          ৳ {dummyUser.earnings}
        </p>
      </div>

      {/* Account Info */}
      <div className="bg-white shadow rounded-xl p-6 space-y-2">
        <h2 className="text-lg font-semibold mb-3">Account Information</h2>

        <p>
          <strong>Phone:</strong> {dummyUser.phone}
        </p>
        <p>
          <strong>Country:</strong> {dummyUser.country}
        </p>
        <p>
          <strong>Payment Method:</strong> {dummyUser.paymentMethod}
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>

      {/* Security Section */}
      <div className="bg-white shadow rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-semibold">Security</h2>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
          Change Password
        </button>

        <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
