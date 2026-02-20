"use client";
import React, { useState } from "react";

const dummyNotifications = [
  {
    id: 1,
    type: "success",
    message: "Your task has been approved 🎉",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "danger",
    message: "Your withdrawal request was rejected ❌",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    message: "New high-paying tasks are available 🚀",
    time: "3 days ago",
    read: true,
  },
  {
    id: 4,
    type: "warning",
    message: "Complete your profile to unlock more tasks ⚠",
    time: "5 days ago",
    read: true,
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n,
    );
    setNotifications(updated);
  };

  const getColor = (type) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-50";
      case "danger":
        return "border-red-500 bg-red-50";
      case "warning":
        return "border-yellow-500 bg-yellow-50";
      default:
        return "border-blue-500 bg-blue-50";
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Notifications</h1>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          {unreadCount} Unread
        </span>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`border-l-4 p-4 rounded-lg shadow-sm flex justify-between items-center ${getColor(
              notification.type,
            )} ${!notification.read ? "opacity-100" : "opacity-70"}`}>
            <div>
              <p className="font-medium">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>

            {!notification.read && (
              <button
                onClick={() => markAsRead(notification.id)}
                className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                Mark as read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
