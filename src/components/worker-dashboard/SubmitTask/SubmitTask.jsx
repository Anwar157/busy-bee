"use client";
import React, { useState } from "react";

const dummyTask = {
  title: "Download App & Screenshot",
  client: "Tech Ltd",
  reward: 30,
  deadline: "18 Feb 2026",
  description:
    "Download the app from PlayStore, take a screenshot of the main page and submit it.",
};

const SubmitTask = () => {
  const [proofText, setProofText] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!proofText && !file) {
      alert("Please provide a proof link or upload a file.");
      return;
    }
    setSubmitted(true);
    setProofText("");
    setFile(null);
    alert("Task submitted successfully!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Submit Task</h1>
        <p className="text-gray-500 text-sm">
          Complete your task and submit proof to get it approved.
        </p>
      </div>

      {/* Task Details */}
      <div className="bg-white shadow rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-semibold">{dummyTask.title}</h2>
        <p className="text-gray-500 text-sm">Client: {dummyTask.client}</p>
        <p className="text-gray-500 text-sm">Deadline: {dummyTask.deadline}</p>
        <p className="text-gray-600">{dummyTask.description}</p>
        <p className="text-green-600 font-semibold">
          Reward: ৳ {dummyTask.reward}
        </p>
      </div>

      {/* Submission Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Submit Your Proof</h2>

        {/* Proof Text */}
        <textarea
          value={proofText}
          onChange={(e) => setProofText(e.target.value)}
          placeholder="Paste your proof link or description..."
          className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Screenshot (optional)
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 rounded-lg text-sm w-full"
          />
          {file && (
            <p className="text-gray-500 text-sm mt-1">
              Selected file: {file.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit Task
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 font-medium text-center mt-2">
            ✅ Task submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default SubmitTask;
