"use client";
import React, { useState } from "react";
import Link from "next/link";

const dummyTasks = [
  {
    id: 1,
    title: "Facebook Page Like",
    client: "Rahim Corp",
    date: "12 Feb 2026",
    amount: 20,
    payment: "Unpaid",
    proof: "Screenshot submitted and verified successfully.",
  },
  {
    id: 2,
    title: "App Review Submission",
    client: "Tech Ltd",
    date: "10 Feb 2026",
    amount: 50,
    payment: "Paid",
    proof: "Playstore review link verified.",
  },
];

const Approved = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const totalEarnings = dummyTasks.reduce((acc, t) => acc + t.amount, 0);
  const paidAmount = dummyTasks
    .filter((t) => t.payment === "Paid")
    .reduce((acc, t) => acc + t.amount, 0);
  const pendingAmount = totalEarnings - paidAmount;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Approved Tasks</h1>
          <p className="text-gray-500 text-sm">
            Track your approved work and earnings history.
          </p>
        </div>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          {dummyTasks.length} Tasks Approved
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <h2 className="text-xl font-bold text-green-600">
            ৳ {totalEarnings}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Approved Tasks</p>
          <h2 className="text-xl font-bold">{dummyTasks.length}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Pending Payment</p>
          <h2 className="text-xl font-bold text-orange-500">
            ৳ {pendingAmount}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Withdrawable</p>
          <h2 className="text-xl font-bold text-blue-600">৳ {paidAmount}</h2>
          <Link
            href="/worker/withdraw"
            className="mt-3 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Go to Withdraw
          </Link>
        </div>
      </div>

      {/* Approved Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Approved Tasks List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">Task</th>
                <th>Client</th>
                <th>Date</th>
                <th>Earned</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyTasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{task.title}</td>
                  <td>{task.client}</td>
                  <td>{task.date}</td>
                  <td className="text-green-600 font-medium">
                    ৳ {task.amount}
                  </td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.payment === "Paid"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-orange-100 text-orange-600"
                      }`}>
                      {task.payment}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedTask(task)}
                      className="text-blue-600 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">{selectedTask.title}</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Client:</strong> {selectedTask.client}
              </p>
              <p>
                <strong>Date:</strong> {selectedTask.date}
              </p>
              <p>
                <strong>Earned:</strong> ৳ {selectedTask.amount}
              </p>
              <p>
                <strong>Payment Status:</strong> {selectedTask.payment}
              </p>
              <p>
                <strong>Submission Proof:</strong>
              </p>
              <div className="bg-gray-100 p-3 rounded-md">
                {selectedTask.proof}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approved;
