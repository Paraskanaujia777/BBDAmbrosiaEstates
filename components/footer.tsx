'use client'

import { useState } from "react"
import { useDialog } from "@/app/context/dialog-context"
import Link from "next/link"

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwDnqIXi2AHbZM1iTkf4vn0BbbVlj-27B1mWEsisTOx4CwWuE0Bo3fYSxtHnBJ69-G6/exec"

export default function SiteVisitFooter() {

  const currentYear = new Date().getFullYear()

  const links = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy",     href: "/privacy" },
    { label: "Cookies Policy",     href: "/cookies" },
  ]

  const { openDialog } = useDialog()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.phoneNumber) {
      alert("Please fill all fields!")
      return
    }

    setStatus("loading")

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      })
      setStatus("success")
      setFormData({ fullName: "", phoneNumber: "" })
      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="bg-[#2d3a1e] w-full">

      {/* Schedule Form Section */}
      <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12">

        <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-center">
          Schedule A Site Visit
        </h2>

        {/* Form Row */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full sm:w-[280px] md:w-[400px] bg-white px-4 py-2.5 md:py-3 rounded text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#487800]"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full sm:w-[280px] md:w-[400px] bg-white px-4 py-2.5 md:py-3 rounded text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#487800]"
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="btn-shine w-full sm:w-auto bg-[#487800] hover:bg-[#3a4e10] text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-medium text-sm md:text-base transition-colors"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>

        </div>

        {/* Success Message */}
        {status === "success" && (
          <p className="text-green-400 text-sm text-center mt-4 font-medium">
            ✅ Thank you! We will contact you soon.
          </p>
        )}

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mx-4 sm:mx-8 md:mx-16" />

      {/* Disclaimer */}
      <div className="px-4 sm:px-8 md:px-16 py-4 md:py-6">
        <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
          <span className="font-bold text-white">Disclaimer:</span> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
        </p>
      </div>

      {/* <FooterBottom/> */}

      <div className="px-4 sm:px-8 md:px-16 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">

        {/* Copyright */}
        <p className="text-white text-xs md:text-sm text-center">
          Copyright © {currentYear} |{" "}
          {links.map((link, index) => (
            <span key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-[#487800] hover:underline transition-colors font-medium"
              >
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span className="text-gray-400 mx-1">|</span>
              )}
            </span>
          ))}
        </p>

      </div>

    </div>
  )
}