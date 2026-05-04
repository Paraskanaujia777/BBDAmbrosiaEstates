'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useDialog } from "@/app/context/dialog-context"

const images = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400",
]

const offers = [
  "- Spot Booking Offers",
  "- Early Buy Discounts",
  "- Flexipay For First 100 Customers",
]

const details = [
  { label: "Land Parcel", value: "25 Acres"       },
  { label: "Floors",      value: "G+2"             },
  { label: "Possession",  value: "December 2030"   },
]

// ── Reusable Card Component ──
function PropertyCard({ openDialog }: { openDialog: () => void }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full">

      {/* Banner */}
      <div className="bg-[rgb(72,120,0)] text-white text-center text-xs md:text-xl font-medium py-2">
        COMING SOON
      </div>

      {/* Card Body */}
      <div className="p-3 md:p-5 flex flex-col gap-3 md:gap-4">

        {/* Title */}
        <div>
          <h1 className="text-lg md:text-3xl font-bold text-[#3a4e10] text-center">
            BBD Ambrosia Estates
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-1 text-center">
            At BBD Green City, Faizabad Road, Lucknow
            <br />
            <span className="font-medium text-gray-700">
              By Viraj Constructions Pvt.Ltd.
            </span>
          </p>
        </div>

        {/* Property Details */}
        <div className="border border-gray-200 rounded p-2 md:p-3 flex flex-col gap-1 md:gap-2">
          {details.map((d, i) => (
            <div key={i} className="flex gap-3 md:gap-6 text-xs md:text-sm items-start">
              <span className="text-gray-500 w-20 md:w-24 shrink-0">{d.label}</span>
              <span className="font-bold text-gray-800">{d.value}</span>
            </div>
          ))}
        </div>

        {/* Offers Box */}
        <div className="flex border-2 border-dashed border-[#487800] bg-[#3ae410]/5 rounded p-3 md:p-4 flex-col gap-1 btn-shine">
          {offers.map((offer, i) => (
            <p key={i} className="text-[#487800] font-semibold text-xs md:text-lg text-center">
              {offer}
            </p>
          ))}
        </div>

        {/* Price */}
        <div className="text-center">
          <p className="text-gray-500 text-sm md:text-lg">
            Luxurious <strong>4.5 & 5.5 BHK Villa</strong> Starts At
          </p>
          <p className="text-xl md:text-3xl font-bold text-[#3a4e10] mt-1">
            ₹ 3.10 Cr*{" "}
            <span className="text-sm md:text-base font-normal text-gray-500">Onwards</span>
          </p>
        </div>

        {/* Button */}
        <div className="animate-bounce-slow">
          <button
            onClick={openDialog}
            className="w-full bg-[rgb(72,120,0)] hover:bg-[#3a4e10] btn-shine cursor-pointer text-white py-2 md:py-3 rounded font-medium text-sm md:text-base transition-colors"
          >
            Download Brochure
          </button>
        </div>

      </div>
    </div>
  )
}

export default function PropertyHero() {
  const [current, setCurrent] = useState(0)
  const { openDialog } = useDialog()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length)
  const next = () => setCurrent((p) => (p + 1) % images.length)

  return (
    <>
      {/* ── Hero Carousel ── */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden">

        {/* Carousel Images */}
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Property ${i + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-1.5 md:p-2 transition"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-1.5 md:p-2 transition"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>

        {/* ── Card inside carousel — Desktop only ── */}
        <div className="hidden md:block absolute top-4 left-4 z-20 w-[380px]">
          <PropertyCard openDialog={openDialog} />
        </div>

      </div>

      {/* ── Card below carousel — Mobile only ── */}
      <div className="block md:hidden px-3 py-4 bg-gray-50">
        <PropertyCard openDialog={openDialog} />
      </div>

    </>
  )
}