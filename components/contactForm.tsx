'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useDialog } from "@/app/context/dialog-context"
import { Lock } from "lucide-react"

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwDnqIXi2AHbZM1iTkf4vn0BbbVlj-27B1mWEsisTOx4CwWuE0Bo3fYSxtHnBJ69-G6/exec"

export default function ContactForm() {
  const { closeDialog } = useDialog()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.phoneNumber) {
      alert("Please fill Full Name and Phone Number!")
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
      setFormData({ fullName: "", phoneNumber: "", emailAddress: "", message: "" })

      setTimeout(() => {
        closeDialog()
        setStatus("idle")
      }, 2000)

    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    }
  }

  return (
    <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200">

      {/* Header */}
      <div className="bg-gray-100 py-6 px-6 text-center border-b border-gray-300">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-sm">Wish to know more?</p>
      </div>

      {/* Form Body */}
      <div className="bg-white p-4 md:p-6 flex flex-col gap-3">

        {/* Full Name & Phone - side by side on desktop */}
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-400 resize-y"
        />

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg hover:bg-gray-700 transition-colors btn-shine"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </Button>

        {/* Privacy Note */}
        <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          We hate spam and we respect your privacy.
        </p>

        {/* Success Message */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-green-600 text-sm font-medium">
              ✅ Thank you! We will contact you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <p className="text-red-500 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}