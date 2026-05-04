'use client'

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDialog } from "@/app/context/dialog-context"

const amenities = [
  {
    id: 1,
    label: "KIDS PLAY AREA",
    image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600",
  },
  {
    id: 2,
    label: "JOGGING TRACK",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
  },
  {
    id: 3,
    label: "AMPHITHEATRE",
    image: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=600",
  },
  {
    id: 4,
    label: "SWIMMING POOL",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600",
  },
  {
    id: 5,
    label: "TENNIS COURT",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600",
  },
  {
    id: 6,
    label: "MULTIPURPOSE HALL",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600",
  },
  {
    id: 7,
    label: "GYM",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
  },
  {
    id: 8,
    label: "CLUBHOUSE",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600",
  },
]

export default function AmenitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { openDialog } = useDialog()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#487800]">
          Amenities Of BBD Ambrosia Estate
        </h1>
        {/* <Button
          onClick={openDialog}
          className="btn-shine bg-[#487800] hover:bg-[#3a4e10] text-white px-4 md:px-6 text-sm md:text-base w-full sm:w-auto"
        >
          Download Amenities
        </Button> */}
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-1.5 md:p-2 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Scrollable Grid */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {/* Mobile - single row */}
          <div className="grid grid-rows-2 grid-flow-col gap-3 w-max md:hidden">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="relative w-[200px] h-[150px] rounded-xl overflow-hidden cursor-pointer group shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
                  <p className="text-white font-bold text-xs tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet - single row larger */}
          <div className="hidden md:flex lg:hidden gap-3 w-max">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="relative w-[280px] h-[200px] rounded-xl overflow-hidden cursor-pointer group shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
                  <p className="text-white font-bold text-xs tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop - 2 row grid */}
          <div className="hidden lg:grid grid-rows-2 grid-flow-col auto-cols-max gap-2 w-max">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="relative w-[380px] h-[240px] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2">
                  <p className="text-white font-bold text-sm tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-1.5 md:p-2 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>

      </div>
    </div>
  )
}