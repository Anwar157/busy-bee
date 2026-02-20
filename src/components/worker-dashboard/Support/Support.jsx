"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Why is my task approval delayed?",
    answer:
      "Task approvals usually take 24-48 hours depending on review workload.",
  },
  {
    question: "How long does withdrawal take?",
    answer: "Withdrawals are processed within 2-5 working days.",
  },
  {
    question: "What should I do if my task is rejected?",
    answer:
      "Please review the task instructions carefully and resubmit correctly.",
  },
  {
    question: "How can I upgrade my membership?",
    answer: "Go to the Membership page and choose your desired plan.",
  },
];

const Support = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Support Center</h1>
        <p className="text-gray-500">
          Need help? Find answers below or contact our support team.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full text-left p-4 font-medium">
                {faq.question}
              </button>

              {activeFAQ === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Contact Support</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-2 rounded-lg"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />

          <textarea
            placeholder="Write your message..."
            className="w-full border p-2 rounded-lg h-32"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Support Info */}
      <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> support@busybee.com
        </p>
        <p>
          <strong>Response Time:</strong> Within 24 hours
        </p>
        <p>
          <strong>Office Hours:</strong> 9 AM - 6 PM (Mon - Fri)
        </p>
      </div>
    </div>
  );
};

export default Support;
