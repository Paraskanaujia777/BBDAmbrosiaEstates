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
  { label: "Floors", value: "On Demand" },
  { label: "Possession", value: "On Demand" },
]

export default function PropertyHero() {
  const [current, setCurrent] = useState(0)
  const { openDialog } = useDialog()

  // Auto-play
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
      <div className="relative w-full h-[600px] overflow-hidden">

        {/* ── Carousel ── */}
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/50"
                }`}
            />
          ))}
        </div>

        {/* ── Sticky Property Card ── */}
        <div className="absolute top-4 left-4 z-20 w-[380px] bg-white rounded-lg overflow-hidden shadow-2xl">

          {/* Booking Banner */}
          <div className="bg-[rgb(72,120,0)] text-white text-center text-sm font-medium py-2">
            Booking Open: Limited Time Only
          </div>

          {/* Card Body */}
          <div className="p-5 flex flex-col gap-4">

            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Ambrosia Estates Phase 1
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                At BBD Green City, Faizabad Road, Lucknow{" "}
                <span className="font-medium text-gray-700">By Viraj Constructions Pvt.Ltd.</span>
              </p>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-bold text-lg">G</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.8 Stars 115 Reviews</span>
            </div>

            {/* Property Details */}
            <div className="border border-gray-200 rounded p-3 flex flex-col gap-2">
              {details.map((d, i) => (
                <div key={i} className="flex gap-6 text-sm">
                  <span className="text-gray-500 w-24 shrink-0">{d.label}</span>
                  <span className="font-bold text-gray-800">{d.value}</span>
                </div>
              ))}
            </div>

            {/* Offers Box */}
            <div className="border-2 border-dashed border-[#487800] bg-[#8b1a2d]/5 rounded p-4 flex flex-col gap-1">
              {offers.map((offer, i) => (
                <p key={i} className="text-[#487800] font-semibold text-sm">
                  {offer}
                </p>
              ))}
            </div>

            {/* Price */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Luxurious <strong>4.5 & 5.5 BHK</strong> Starts At
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                ₹ 3.10 Cr*{" "}
                <span className="text-base font-normal text-gray-500">Onwards</span>
              </p>
            </div>
            {/* Download Button */}
            <button onClick={openDialog}
             className="w-full bg-[rgb(72,120,0)] hover:bg-[#3a4e10] btn-shine cursor-pointer
           text-white py-3 rounded font-medium transition-colors">
              Download Brochure
            </button>

          </div>
        </div>

      </div>



      <div className="mb-25">
        <div className="flex flex-row justify-between bg-gray-200 ">
          <div className="flex flex-row justify-between p-4 gap-2 ">
            <div><House className="height-[3px] mt-3" /></div>
            <div>
              <span>
                Prime Location <br />
                <h3 className="font-bold cursor-pointer"
                onClick={openDialog}>
                  Price On Demand
                </h3>
              </span>
            </div>


          </div>
          <div className="flex flex-row justify-between p-4 gap-2 ">
            <div><House className="height-[3px] mt-3" /></div>
            <div><span>

              Residential Villas <br />
              <h3 className="font-bold cursor-pointer"
                onClick={openDialog}>
                  Price On Demand
                </h3>
            </span></div>


          </div>
          <div className="flex flex-row justify-between p-4 gap-2 ">
            <div><House className="height-[3px] mt-3" /></div>
            <div><span>
              Green City Villas <br />
              <h3 className="font-bold cursor-pointer"
                onClick={openDialog}>
                  Price On Demand
                </h3>
            </span></div>


          </div>

          <div className="flex flex-row justify-between p-4 gap-2 ">
            <div><House className="height-[3px] mt-3" /></div>
            <div><span>
              360 degree View<br />
              <h3 className="font-bold cursor-pointer"
                onClick={openDialog}>
                  Price On Demand
                </h3>
            </span></div>


          </div>


        </div>
      </div>
    </>
  )
}