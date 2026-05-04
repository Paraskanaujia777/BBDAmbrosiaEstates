'use client'

import { useState } from "react"
import { PhoneCall } from "lucide-react"
import { useDialog } from "@/app/context/dialog-context"

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwDnqIXi2AHbZM1iTkf4vn0BbbVlj-27B1mWEsisTOx4CwWuE0Bo3fYSxtHnBJ69-G6/exec"

export default function ContactForm() {
  const { closeDialog } = useDialog()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.phoneNumber) {
      alert("Please fill Name and Phone!")
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
      setFormData({ fullName: "", emailAddress: "", phoneNumber: "" })

      setTimeout(() => {
        closeDialog()
        setStatus("idle")
      }, 2000)

    } catch {
      setStatus("idle")
    }
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Heading */}
      <h2 className="text-sm md:text-base font-semibold text-gray-900">
        Register Here And Avail The{" "}
        <span className="text-[#3a4e10] font-bold">Best Offers!!</span>
      </h2>

      {/* Name */}
      <div className="border-b border-gray-300 pb-2">
        <input
          type="text"
          placeholder="Name *"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Email */}
      <div className="border-b border-gray-300 pb-2">
        <input
          type="email"
          placeholder="Email Address (Optional)"
          value={formData.emailAddress}
          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
          className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Phone */}
      <div className="border-b border-gray-300 pb-2 flex items-center gap-2">
        <span className="text-sm text-gray-700 shrink-0 font-medium">
          India (+91)
        </span>
        <span className="text-gray-300">|</span>
        <input
          type="tel"
          placeholder="Phone number *"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="btn-shine w-full bg-[rgb(72,120,0)] hover:bg-[#3a4e10] text-white py-3 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2"
      >
        <PhoneCall className="w-4 h-4" />
        {status === "loading" ? "Submitting..." : "Get Instant Call Back"}
      </button>

      {/* Success */}
      {status === "success" && (
        <p className="text-green-600 text-xs text-center font-medium">
          ✅ Thank you! We will call you back soon.
        </p>
      )}

    </div>
  )
}