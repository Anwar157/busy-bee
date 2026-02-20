"use client";
import React, { useState } from "react";

const dummyHistory = [
  {
    id: 1,
    date: "10 Feb 2026",
    amount: 1000,
    method: "bKash",
    status: "Pending",
  },
  {
    id: 2,
    date: "05 Feb 2026",
    amount: 2000,
    method: "Bank",
    status: "Approved",
  },
  {
    id: 3,
    date: "28 Jan 2026",
    amount: 1500,
    method: "Nagad",
    status: "Rejected",
  },
];

const WithDraw = () => {
  const availableBalance = 5000;
  const minimumWithdraw = 500;

  const [form, setForm] = useState({
    amount: "",
    method: "bKash",
    account: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.amount < minimumWithdraw) {
      alert(`Minimum withdraw amount is ৳${minimumWithdraw}`);
      return;
    }

    if (form.amount > availableBalance) {
      alert("Insufficient balance!");
      return;
    }

    alert("Withdrawal request submitted successfully!");
    setForm({ amount: "", method: "bKash", account: "" });
  };

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
        <h1 className="text-2xl font-bold">Withdraw Funds</h1>
        <p className="text-gray-500">
          Request withdrawal of your earned balance securely.
        </p>
      </div>

      {/* Balance Section */}
      <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Available Balance</p>
          <h2 className="text-2xl font-bold text-green-600">
            ৳ {availableBalance}
          </h2>
          <p className="text-xs text-gray-400">
            Minimum withdrawal: ৳ {minimumWithdraw}
          </p>
        </div>
      </div>

      {/* Withdraw Form */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Withdraw Request</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full border p-2 rounded-lg"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: Number(e.target.value) })
            }
            required
          />

          <select
            className="w-full border p-2 rounded-lg"
            value={form.method}
            onChange={(e) => setForm({ ...form, method: e.target.value })}>
            <option value="bKash">bKash</option>
            <option value="Nagad">Nagad</option>
            <option value="Bank">Bank Transfer</option>
          </select>

          <input
            type="text"
            placeholder="Account Number"
            className="w-full border p-2 rounded-lg"
            value={form.account}
            onChange={(e) => setForm({ ...form, account: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Submit Withdrawal
          </button>
        </form>
      </div>

      {/* Withdraw History */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Withdrawal History</h2>

        <div className="space-y-3">
          {dummyHistory.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 rounded-lg">
              <div>
                <p className="font-medium">৳ {item.amount}</p>
                <p className="text-sm text-gray-500">
                  {item.date} • {item.method}
                </p>
              </div>

              <span
                className={`text-sm font-semibold ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
        <p>• Withdrawals are processed within 2-5 working days.</p>
        <p>• Incorrect account details may cause rejection.</p>
        <p>• Rejected withdrawals will be refunded to your balance.</p>
      </div>
    </div>
  );
};

export default WithDraw;
