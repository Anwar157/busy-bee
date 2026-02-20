"use client";
import React, { useState } from "react";

const dummyData = [
  {
    id: "TXN-1001",
    date: "12 Feb 2026",
    amount: 1500,
    method: "bKash",
    status: "Approved",
  },
  {
    id: "TXN-1002",
    date: "10 Feb 2026",
    amount: 2000,
    method: "Bank",
    status: "Pending",
  },
  {
    id: "TXN-1003",
    date: "05 Feb 2026",
    amount: 1000,
    method: "Nagad",
    status: "Rejected",
  },
];

const WithDrawHistory = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? dummyData
      : dummyData.filter((item) => item.status === filter);

  const totalWithdrawn = dummyData
    .filter((item) => item.status === "Approved")
    .reduce((acc, item) => acc + item.amount, 0);

  const pendingAmount = dummyData
    .filter((item) => item.status === "Pending")
    .reduce((acc, item) => acc + item.amount, 0);

  const rejectedAmount = dummyData
    .filter((item) => item.status === "Rejected")
    .reduce((acc, item) => acc + item.amount, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-600";
      case "Rejected":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Withdraw History</h1>
        <p className="text-gray-500">
          Track all your withdrawal transactions here.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Approved</p>
          <h2 className="text-xl font-bold text-green-600">
            ৳ {totalWithdrawn}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Pending Amount</p>
          <h2 className="text-xl font-bold text-yellow-600">
            ৳ {pendingAmount}
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Rejected Amount</p>
          <h2 className="text-xl font-bold text-red-600">৳ {rejectedAmount}</h2>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">
        {["All", "Approved", "Pending", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg ${
              filter === status ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}>
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-xl p-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Transaction ID</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Method</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-3">{item.id}</td>
                <td>{item.date}</td>
                <td>৳ {item.amount}</td>
                <td>{item.method}</td>
                <td className={`font-semibold ${getStatusColor(item.status)}`}>
                  {item.status}
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithDrawHistory;
