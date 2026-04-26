'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import ContactForm from "./contactForm"
import Image from "next/image"
import { useEffect } from "react"
import { useDialog } from "@/app/context/dialog-context";

export function DialogCloseButton() {

  const { open, closeDialog, openDialog } = useDialog()



  // Open dialog on page load
  

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => isOpen ? openDialog() : closeDialog()}
    >
      <DialogContent className="md:max-w-[800px] p-0 overflow-hidden">

        <DialogTitle className="sr-only">Contact Form</DialogTitle>

        <div className="flex flex-col md:flex-row">

          {/* Left - Image */}
          <div className="relative w-full md:w-1/2 min-h-[400px]">
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
          <div className="w-full md:w-1/2 p-6 flex flex-col gap-4">
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