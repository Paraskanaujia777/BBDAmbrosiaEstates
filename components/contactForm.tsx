'use client'

import { useState } from "react";
import { Lock } from "lucide-react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const handleSubmit = () => {

    console.log(formData);
    // your submit logic here
  };

  return (
    <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200">
      {/* Header */}
      <div className="bg-gray-100 py-8 px-6 text-center border-b border-gray-300">
        <h2 className="text-3xl font-bold text-[#487800]
         mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-sm">Wish to know more?</p>
      </div>

      {/* Form */}
      <div className="bg-white p-6 flex flex-col gap-4">

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Email Address */}
        <input
          type="email"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-gray-400 resize-y"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#487800]  text-white py-4 rounded-lg font-medium text-lg hover:bg-[#3a4e10] btn-shine
            transition-colors"
        >
          Submit
        </button>

        {/* Privacy Note */}
        <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          We hate spam and we respect your privacy.
        </p>

      </div>
    </div>
  );
}