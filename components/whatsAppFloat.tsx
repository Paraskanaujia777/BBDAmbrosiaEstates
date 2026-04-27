'use client'

import { Phone } from "lucide-react"
import { useDialog } from "@/app/context/dialog-context"

const PHONE_NUMBER = "9918016160"
const WHATSAPP_MESSAGE = "Hello! I'm interested in BBD Ambrosia Estate."

export default function FloatingButtons() {
  const { openDialog } = useDialog()

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3">

      {/* Enquire Button */}
      <button
        onClick={openDialog}
        className="btn-shine flex items-center justify-center gap-2 bg-[#8b1a2d] hover:bg-[#6f1524] text-white
          w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3
          rounded-full shadow-lg transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5 shrink-0" />
        {/* Text hidden on mobile */}
        <span className="font-medium text-sm hidden md:inline">
          Enquire Now
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={() =>
          window.open(
            `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
            "_blank"
          )
        }
        className="btn-shine flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white
          w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3
          rounded-full shadow-lg transition-all hover:scale-105"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-5 h-5 shrink-0"
        />
        {/* Text hidden on mobile */}
        <span className="font-medium text-sm hidden md:inline">
          WhatsApp
        </span>
      </button>

      {/* Phone Call Button */}
      <a
        href={`tel:+${PHONE_NUMBER}`}
        className="btn-shine flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white
          w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3
          rounded-full shadow-lg transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5 shrink-0" />
        {/* Text hidden on mobile */}
        <span className="font-medium text-sm hidden md:inline">
          Call Us
        </span>
      </a>

    </div>
  )
}