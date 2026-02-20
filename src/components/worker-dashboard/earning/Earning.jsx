"use client";
import React from "react";
import Link from "next/link";

const transactions = [
  {
    id: 1,
    type: "Task Reward",
    amount: 50,
    status: "Completed",
    date: "12 Feb 2026",
  },
  {
    id: 2,
    type: "Task Reward",
    amount: 20,
    status: "Pending",
    date: "14 Feb 2026",
  },
  {
    id: 3,
    type: "Bonus",
    amount: 100,
    status: "Completed",
    date: "10 Feb 2026",
  },
];

const Earning = () => {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  const completed = transactions
    .filter((t) => t.status === "Completed")
    .reduce((acc, t) => acc + t.amount, 0);
  const pending = total - completed;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Earnings Overview</h1>
        <p className="text-gray-500 text-sm">
          Track your income and transaction history.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <h2 className="text-xl font-bold text-green-600">৳ {total}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Completed Earnings</p>
          <h2 className="text-xl font-bold text-blue-600">৳ {completed}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Pending Earnings</p>
          <h2 className="text-xl font-bold text-orange-500">৳ {pending}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Available Balance</p>
          <h2 className="text-xl font-bold text-purple-600">৳ {completed}</h2>
          <Link
            href="/worker/withdraw"
            className="mt-3 inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Withdraw Now
          </Link>
        </div>
      </div>

      {/* Earnings Chart Placeholder */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Earnings Trend (Last 7 Days)
        </h2>
        <div className="h-40 flex items-center justify-center text-gray-400">
          Chart Coming Soon...
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{t.type}</td>
                  <td className="text-green-600 font-medium">৳ {t.amount}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        t.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}>
                      {t.status}
                    </span>
                  </td>
                  <td>{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earning;
