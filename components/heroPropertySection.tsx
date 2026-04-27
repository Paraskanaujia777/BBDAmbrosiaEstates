'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, House, Star } from "lucide-react"
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
  { label: "Land Parcel", value: "On Demand" },
  { label: "Floors",      value: "On Demand" },
  { label: "Possession",  value: "On Demand" },
]

const stats = [
  { label: "Prime Location",    value: "Price On Demand" },
  { label: "Residential Villas", value: "Price On Demand" },
  { label: "Green City Villas",  value: "Price On Demand" },
  { label: "360 Degree View",    value: "Price On Demand" },
]

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
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

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

        {/* ── Property Card ── */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20
          w-[260px] sm:w-[300px] md:w-[380px]
          bg-white rounded-lg overflow-hidden shadow-2xl">

          {/* Banner */}
          <div className="bg-[rgb(72,120,0)] text-white text-center text-xs md:text-sm font-medium py-2">
            Booking Open: Limited Time Only
          </div>

          {/* Card Body */}
          <div className="p-3 md:p-5 flex flex-col gap-3 md:gap-4">

            {/* Title */}
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                Ambrosia Estates Phase 1
              </h1>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                At BBD Green City, Faizabad Road, Lucknow{" "}
                <span className="font-medium text-gray-700">
                  By Viraj Constructions Pvt.Ltd.
                </span>
              </p>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-blue-500 font-bold text-base md:text-lg">G</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs md:text-sm text-gray-600">4.8 Stars 115 Reviews</span>
            </div>

            {/* Property Details */}
            <div className="border border-gray-200 rounded p-2 md:p-3 flex flex-col gap-1 md:gap-2">
              {details.map((d, i) => (
                <div key={i} className="flex gap-3 md:gap-6 text-xs md:text-sm">
                  <span className="text-gray-500 w-20 md:w-24 shrink-0">{d.label}</span>
                  <span className="font-bold text-gray-800">{d.value}</span>
                </div>
              ))}
            </div>

            {/* Offers Box - hidden on small mobile */}
            <div className="hidden sm:flex border-2 border-dashed border-[#487800] bg-[#8b1a2d]/5 rounded p-3 md:p-4 flex-col gap-1">
              {offers.map((offer, i) => (
                <p key={i} className="text-[#487800] font-semibold text-xs md:text-sm text-center">
                  {offer}
                </p>
              ))}
            </div>

            {/* Price */}
            <div className="text-center">
              <p className="text-gray-500 text-xs md:text-sm">
                Luxurious <strong>4.5 & 5.5 BHK</strong> Starts At
              </p>
              <p className="text-xl md:text-3xl font-bold text-gray-900 mt-1">
                ₹ 3.10 Cr*{" "}
                <span className="text-sm md:text-base font-normal text-gray-500">Onwards</span>
              </p>
            </div>

            {/* Button */}
            <button
              onClick={openDialog}
              className="w-full bg-[rgb(72,120,0)] hover:bg-[#3a4e10] btn-shine cursor-pointer text-white py-2 md:py-3 rounded font-medium text-sm md:text-base transition-colors"
            >
              Download Brochure
            </button>

          </div>
        </div>

      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 p-4 border-b md:border-b-0 border-gray-300 md:border-r last:border-r-0"
            >
              {/* Icon */}
              <House className="w-6 h-6 md:w-8 md:h-8 text-[rgb(72,120,0)] shrink-0" />

              {/* Text */}
              <div>
                <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                <h3
                  className="font-bold text-sm md:text-base cursor-pointer hover:text-[rgb(72,120,0)] transition-colors"
                  onClick={openDialog}
                >
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}