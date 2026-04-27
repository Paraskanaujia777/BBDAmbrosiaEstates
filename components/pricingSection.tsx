'use client'

import Image from "next/image"
import { useDialog } from "@/app/context/dialog-context"

export default function PricingSection() {
  const { openDialog } = useDialog()

  const pricingData = [
    {
      id: 1,
      type: "Residential Villa",
      buildUpArea: "On Request",
      onDemand: "Request",
    },
    {
      id: 2,
      type: "4.5 BHK",
      buildUpArea: "On Request",
      onDemand: "Request",
    },
    {
      id: 3,
      type: "5.5 BHK",
      buildUpArea: "On Request",
      onDemand: "Request",
    },
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-16">

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#487800] mb-8 md:mb-20 text-center">
        BBD Ambrosia Estate - Pricing
      </h2>

      {/* Content - Table + Image */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

        {/* Pricing Table */}
        <div className="w-full md:w-1/2">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">

              {/* Table Header */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-gray-700 text-xs md:text-sm">
                    Type
                  </th>
                  <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-gray-700 text-xs md:text-sm">
                    Size (sq.ft.)
                  </th>
                  <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-gray-700 text-xs md:text-sm">
                    Price
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {pricingData.map((item) => (
                  <tr key={item.id} className="bg-white">

                    {/* Type */}
                    <td className="border border-gray-300 px-3 md:px-6 py-4 md:py-5 text-center text-gray-700 text-xs md:text-sm">
                      {item.type}
                    </td>

                    {/* Build Up Area */}
                    <td className="border border-gray-300 px-3 md:px-6 py-4 md:py-5 text-center">
                      <button
                        onClick={openDialog}
                        className="bg-[#6b7c2d] hover:bg-[#5a6a24] text-white px-2 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm font-medium transition-colors btn-shine"
                      >
                        {item.buildUpArea}
                      </button>
                    </td>

                    {/* Price */}
                    <td className="border border-gray-300 px-3 md:px-6 py-4 md:py-5 text-center">
                      <button
                        onClick={openDialog}
                        className="bg-[#4a5e1a] hover:bg-[#3a4e10] text-white px-3 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm font-medium transition-colors btn-shine"
                      >
                        {item.onDemand}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Download Brochure below table on mobile */}
          <button
            onClick={openDialog}
            className="btn-shine mt-4 w-full bg-[#487800] hover:bg-[#3a4e10] text-white py-3 rounded font-medium text-sm transition-colors"
          >
            Download Price Sheet
          </button>

        </div>

        {/* Cost Sheet Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-3">
          <div
            onClick={openDialog}
            className="border border-gray-300 shadow-sm rounded overflow-hidden w-full max-w-[320px] h-[200px] md:h-[240px] relative cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://images.unsplash.com/photo-1579532582937-16c108930bf6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Complete Costing Details"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Complete Costing Details
          </p>
          <p className="text-xs text-gray-400 text-center">
            Click image to get complete pricing details
          </p>
        </div>

      </div>
    </div>
  )
}