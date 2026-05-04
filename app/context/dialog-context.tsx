'use client'
import { createContext, useContext, useState, useEffect, useRef } from 'react'

interface DialogContextType {
  open: boolean
  openDialog: () => void
  closeDialog: () => void
}

const DialogContext = createContext<DialogContextType>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
})

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  // ── Reopen every 2 minutes on user interaction ──
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setOpen(true)
    }, 1 * 60 * 1000) // ← 1 minutes
  }

  useEffect(() => {
    // Open on first load after 5 seconds
    const firstOpen = setTimeout(() => {
      setOpen(true)
    }, 10000)

    // Track user interactions
    const events = ["click", "scroll", "mousemove", "keydown", "touchstart"]
    events.forEach((event) => window.addEventListener(event, resetTimer))

    // Start timer
    resetTimer()

    return () => {
      clearTimeout(firstOpen)
      if (timerRef.current) clearTimeout(timerRef.current)
      events.forEach((event) => window.removeEventListener(event, resetTimer))
    }
  }, [])

  return (
    <DialogContext.Provider value={{ open, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)