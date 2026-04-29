'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import ContactForm from "./contactForm"
import Image from "next/image"
import { useDialog } from "@/app/context/dialog-context"
import { X } from "lucide-react"

export function DialogCloseButton() {

  const { open, closeDialog, openDialog } = useDialog()

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => isOpen ? openDialog() : closeDialog()}
    >
      <DialogContent className="
        w-[95vw] max-w-[95vw] md:max-w-[800px]
        max-h-[90vh]
        p-0 overflow-hidden
        rounded-xl
      ">

        <DialogTitle className="sr-only">Contact Form</DialogTitle>

        {/* Mobile Close Button — top right */}
        <button
          onClick={closeDialog}
          className="absolute top-3 right-3 z-50 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition md:hidden"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Scrollable wrapper on mobile */}
        <div className="flex flex-col md:flex-row overflow-y-auto max-h-[90vh] md:overflow-hidden md:max-h-none">

          {/* Left - Image — hidden on mobile */}
          <div className="hidden md:block relative md:w-1/2 min-h-[400px]">
            <Image
              alt="Property Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover"
              src="https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          {/* Right - Form */}
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-3 md:gap-4">
            <ContactForm />
            <Button
              variant="outline"
              className="w-full"
              onClick={closeDialog}
            >
              Close
            </Button>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  )
}