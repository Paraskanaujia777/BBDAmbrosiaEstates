'use client'

import { useDialog } from "@/app/context/dialog-context"
import { Button } from "@/components/ui/button"

export default function FloorPlanSection() {
  const { openDialog } = useDialog()

  const floorPlans = [
    { id: 1, label: "4.5 BHK Villa" },
    { id: 2, label: "5.5 BHK Villa" },
    { id: 3, label: "Custom Layout" },
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 border-b border-gray-200">

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#487800] text-center
      ">
        BBD Ambrosia Estate Floor Plan
      </h1>

      {/* Buttons Row */}
      <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center
      ">

        

        {/* On Request Button */}
        <Button
          onClick={openDialog}
          className="btn-shine mt-4  bg-[#487800] hover:bg-[#3a4e10] text-white py-3 rounded font-medium text-sm transition-colors"
        >
          On Request
        </Button>

      </div>

      {/* Subtext */}
      <p className="text-gray-400 text-xs md:text-sm mt-4 md:mt-6
      text-center">
        Click on button to get detailed floor plan
      </p>

    </div>
  )
}