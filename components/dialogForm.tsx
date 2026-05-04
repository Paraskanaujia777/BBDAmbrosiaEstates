'use client';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useDialog } from "@/app/context/dialog-context"
import { X, PhoneCall, Car, IndianRupee } from "lucide-react"
import ContactForm from "./contactForm";

const PHONE_NUMBER = "919918016160"

const promises = [
  { icon: PhoneCall,    label: "Instant Call Back" },
  { icon: Car,          label: "Free Site Visit"   },
  { icon: IndianRupee,  label: "Unmatched Price"   },
]

export function DialogCloseButton() {
  const { open, closeDialog, openDialog } = useDialog()

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => isOpen ? openDialog() : closeDialog()}
    >
      <DialogContent className="w-[95vw] max-w-[95vw] md:max-w-[700px] p-0 overflow-hidden rounded-xl max-h-[95vh] overflow-y-auto">

        <DialogTitle className="sr-only">Contact Form</DialogTitle>

        {/* Close Button */}
        <button
          onClick={closeDialog}
          className="absolute top-3 right-3 z-50 bg-gray-100 rounded-full p-1.5 hover:bg-gray-200 transition"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row">

          {/* Left - Logo + We Promise */}
          <div className="w-full md:w-[240px] bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 flex flex-col gap-4">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLpozS4CvBMiZBu9-CfItDhGXLs6tBVg0IaIkGNzknw&s&ec=121643274"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-bold text-sm text-gray-900">BBD AMBROSIA</p>
                <p className="text-xs text-gray-500">BBD Green City, Lucknow</p>
              </div>
            </div>

            {/* We Promise */}
            <div>
              <h3 className="text-[#3a4e10] font-bold text-base md:text-xl mb-3 text-center">
                We Promise
              </h3>
              <div className="flex flex-row md:flex-col gap-3">
                {promises.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-[rgb(72,120,0)]/10 rounded-full p-2 shrink-0">
                      <item.icon className="w-4 h-4 text-[rgb(72,120,0)]" />
                    </div>
                    <span className="text-[#3a4e10] text-xs md:text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right - Form Component */}
          <div className="flex-1 p-4 md:p-6">
            <ContactForm />  {/* ← use form component here */}
          </div>

        </div>

        {/* Bottom Phone Bar */}
        <a
        
          href={`tel:+${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 bg-[rgb(72,120,0)] hover:bg-[#3a4e10] text-white py-3 transition-colors"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="font-bold text-sm md:text-base">
            +91 99180 16160
          </span>
        </a>

      </DialogContent>
    </Dialog>
  )
}