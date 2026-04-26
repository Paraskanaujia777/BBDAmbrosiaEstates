'use client'
import { createContext, useContext, useState } from 'react'

// Add interface ✅
interface DialogContextType {
  open: boolean
  openDialog: () => void
  closeDialog: () => void
}

// Pass interface to createContext ✅
const DialogContext = createContext<DialogContextType>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
})

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)

  return (
    <DialogContext.Provider value={{
      open,
      openDialog: () => setOpen(true),
      closeDialog: () => setOpen(false),
    }}>
      {children}
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)