'use client'

import { Phone } from "lucide-react"
import { useDialog } from "@/app/context/dialog-context"

const PHONE_NUMBER = "919918016160"
const WHATSAPP_MESSAGE = "Hello! I'm interested in BBD Ambrosia Estate."

export default function FloatingButtons() {
  const { openDialog } = useDialog()

  return (
    <div
      className="
      fixed bottom-0 left-0 w-full z-50 
      flex flex-row justify-around items-center p-2 bg-white shadow-lg

      md:w-auto md:bottom-6 md:left-auto md:right-6 md:bg-transparent md:shadow-none
      md:flex-col md:gap-3
      "
    >

      {/* Enquire */}
      <button
        onClick={openDialog}
        className="flex items-center justify-center gap-2 bg-[#8b1a2d] hover:bg-[#6f1524] text-white btn-shine
        w-full md:w-full md:px-4 md:py-3 py-2 rounded-lg md:rounded-full transition-all"
      >
        <span className="font-medium text-sm">Enquire</span>
      </button>

      {/* WhatsApp */}
      <button
        onClick={() =>
          window.open(
            `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
            "_blank"
          )
        }
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white btn-shine
        w-full md:w-auto md:px-4 md:py-3 py-2 rounded-lg md:rounded-full transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        <span className="font-medium text-sm">WhatsApp</span>
      </button>

      {/* Call */}
      <a
        href={`tel:+${PHONE_NUMBER}`}
        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white btn-shine
        w-full md:w-full md:px-4 md:py-3 py-2 rounded-lg md:rounded-full transition-all"
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium text-sm">Call</span>
      </a>

    </div>
  )
}