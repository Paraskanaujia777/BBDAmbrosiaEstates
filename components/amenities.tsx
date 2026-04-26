'use client'

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 700
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full px-8 md:px-16 py-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-[#487800] ">
          Amenities Of Rishita Mulberry Heights
        </h1>
        <Button className="bg-[#487800] hover:bg-[#3a4e10] text-white px-6">
          Download Amenities
        </Button>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scrollable Grid */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-[calc(33.333%-8px)] gap-1 w-max">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="relative w-[420px] h-[270px] rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Label */}
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
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

      </div>
    </div>
  )
}