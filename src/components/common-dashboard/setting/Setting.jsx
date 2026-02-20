"use client";
import React, { useState } from "react";

const Setting = () => {
  const [profile, setProfile] = useState({
    name: "Anwar Hossen",
    email: "anwar@example.com",
    phone: "+8801234567890",
  });

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    task: true,
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (password.newPass !== password.confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert("Password changed successfully!");
    setPassword({ current: "", newPass: "", confirm: "" });
  };

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-gray-500">
          Manage your profile, security and preferences.
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>

        <form onSubmit={handleProfileSave} className="space-y-4">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            value={password.current}
            onChange={(e) =>
              setPassword({ ...password, current: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={password.newPass}
            onChange={(e) =>
              setPassword({ ...password, newPass: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={password.confirm}
            onChange={(e) =>
              setPassword({ ...password, confirm: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
            required
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Update Password
          </button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>

        <div className="space-y-3">
          {Object.keys(notifications).map((key) => (
            <div key={key} className="flex justify-between items-center">
              <span className="capitalize">{key} Notifications</span>
              <input
                type="checkbox"
                checked={notifications[key]}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    [key]: !notifications[key],
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Setting;
