'use client'

import { useState } from "react";

export default function SiteVisitFooter() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    // your submit logic here
  };

  return (
    <div className="bg-gray-500 w-full h-[300px]">

      {/* Schedule Form Section */}
      <div className="px-8 md:px-16 py-12">
        
        <h2 className="text-white font-bold text-xl mb-6 text-center">
          Schedule A Site Visit
        </h2>

        {/* Form Row */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full md:w-[400px] bg-white px-4 py-3 rounded text-sm text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full md:w-[400px] bg-white px-4 py-3 rounded text-sm text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#487800]          hover:bg-[#3a4e10]
             text-white px-8 py-3 rounded font-medium transition-colors w-full md:w-auto"
     >
            Submit
          </button>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mx-8 md:mx-16" />

      {/* Disclaimer Section */}
      <div className="px-8 md:px-16 py-6">
        <p className="text-gray-300 text-xs leading-relaxed">
          <span className="font-bold text-white">Disclaimer:</span> The content
          on this website is for information purposes only and does not
          constitute an offer to avail of any service. Prices mentioned are
          subject to change without notice and properties mentioned are subject
          to availability. Images are for representation purposes only. This is
          the official website of authorized marketing partner. We may also send
          updates to the mobile number/email id registered with us.
        </p>
      </div>

    </div>
  );
}