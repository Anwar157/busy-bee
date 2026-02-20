"use client";
import React, { useState } from "react";

const dummyTasks = [
  {
    id: 1,
    title: "Download App & Screenshot",
    client: "Tech Ltd",
    reward: 30,
    deadline: "18 Feb 2026",
    status: "Active",
  },
  {
    id: 2,
    title: "Facebook Share Post",
    client: "Rahim Corp",
    reward: 20,
    deadline: "15 Feb 2026",
    status: "Submitted",
  },
  {
    id: 3,
    title: "YouTube Subscribe",
    client: "Media Ltd",
    reward: 15,
    deadline: "14 Feb 2026",
    status: "In Review",
  },
  {
    id: 4,
    title: "App Review",
    client: "PlayStore Ltd",
    reward: 50,
    deadline: "10 Feb 2026",
    status: "Rejected",
  },
];

const MyTask = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [selectedTask, setSelectedTask] = useState(null);
  const [proof, setProof] = useState("");

  const filteredTasks = dummyTasks.filter((task) => task.status === activeTab);

  const statusCount = (status) =>
    dummyTasks.filter((task) => task.status === status).length;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <p className="text-gray-500 text-sm">
          Manage your ongoing and submitted tasks.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["Active", "Submitted", "In Review", "Rejected"].map((status) => (
          <div
            key={status}
            className="bg-white shadow rounded-xl p-5 cursor-pointer hover:shadow-md transition"
            onClick={() => setActiveTab(status)}>
            <p className="text-sm text-gray-500">{status} Tasks</p>
            <h2 className="text-xl font-bold">{statusCount(status)}</h2>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        {["Active", "Submitted", "In Review", "Rejected"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow rounded-xl p-6 space-y-3">
              <h2 className="font-semibold text-lg">{task.title}</h2>
              <p className="text-sm text-gray-500">Client: {task.client}</p>
              <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
              <p className="text-green-600 font-semibold">
                Reward: ৳ {task.reward}
              </p>

              <div className="flex gap-3 pt-3">
                {task.status === "Active" && (
                  <>
                    <button
                      onClick={() => setSelectedTask(task)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                      Submit
                    </button>
                    <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-200">
                      Cancel
                    </button>
                  </>
                )}

                {task.status !== "Active" && (
                  <span className="text-sm text-gray-600">
                    Status: {task.status}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Submit Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Submit Task</h2>

            <p className="text-sm mb-2">
              Task: <strong>{selectedTask.title}</strong>
            </p>

            <textarea
              value={proof}
              onChange={(e) => setProof(e.target.value)}
              placeholder="Paste your proof link or description..."
              className="w-full border rounded-lg p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />

            <button
              onClick={() => {
                setSelectedTask(null);
                setProof("");
                alert("Task submitted successfully!");
              }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTask;
