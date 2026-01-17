"use client";
import React from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("We will contact you soon");
    e.target.reset();
  };
  return (
    <form onSubmit={handleSendMessage} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full px-3 py-2 rounded bg-base-100 border border-base-300"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        className="w-full px-3 py-2 rounded bg-base-100 border border-base-300"
      />

      <textarea
        placeholder="Your Message"
        required
        className="w-full px-3 py-2 rounded bg-base-100 border border-base-300 min-h-30"
      />

      <button
        type="submit"
        className="border border-primary text-primary cursor-pointer hover:bg-primary hover:text-base-100 transition px-6 py-2 rounded font-medium"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
