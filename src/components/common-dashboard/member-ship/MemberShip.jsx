"use client";
import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: 0,
    features: [
      "5 Tasks per day",
      "Standard payout",
      "Ads visible",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: 499,
    features: [
      "20 Tasks per day",
      "Priority approval",
      "Higher payout rate",
      "No ads",
      "Premium support",
    ],
  },
  {
    name: "Elite",
    price: 999,
    features: [
      "Unlimited tasks",
      "Fastest approval",
      "Highest payout rate",
      "VIP badge",
      "Dedicated support",
    ],
  },
];

const MemberShip = () => {
  const [billing, setBilling] = useState("monthly");
  const currentPlan = "Basic";

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Membership Plans</h1>
        <p className="text-gray-500">
          Upgrade your account to unlock more earning potential 🚀
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
        <div>
          <h2 className="font-semibold">Current Plan</h2>
          <p className="text-lg font-bold text-blue-600">{currentPlan}</p>
        </div>

        {currentPlan === "Basic" && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Upgrade Now
          </button>
        )}
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-lg ${
            billing === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}>
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-lg ${
            billing === "yearly" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}>
          Yearly (Save 20%)
        </button>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white shadow rounded-xl p-6 border ${
              currentPlan === plan.name ? "border-blue-600" : "border-gray-200"
            }`}>
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">
              ৳ {billing === "monthly" ? plan.price : plan.price * 12 * 0.8}
              <span className="text-sm text-gray-500"> / {billing}</span>
            </p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">
                  ✔ {feature}
                </li>
              ))}
            </ul>

            {currentPlan === plan.name ? (
              <button className="w-full bg-gray-300 py-2 rounded-lg cursor-not-allowed">
                Current Plan
              </button>
            ) : (
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberShip;
