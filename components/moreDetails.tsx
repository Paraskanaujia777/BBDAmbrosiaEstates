'use client'

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ReadMoreSection() {

  const [isExpanded, setIsExpanded] = useState(false)

  const sections = [
    {
      id: 1,
      heading: "About BBD Green City Lucknow",
      content: (
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
          <strong>BBD Ambrosia Estate</strong> is an upcoming premium residential villa project located near{" "}
          <strong>BBD Green City on Faizabad (Ayodhya) Road, Lucknow</strong>. Designed to offer a modern
          and peaceful lifestyle, this project brings together luxury living, green surroundings and excellent
          connectivity in one of Lucknow's fastest growing areas. The project is thoughtfully planned for
          families who want spacious homes, better privacy and a calm environment away from city congestion.
          Unlike apartments, these villas offer a sense of independence along with beautifully designed layouts
          and open spaces. Faizabad Road has rapidly emerged as a preferred residential destination due to its
          infrastructure growth, connectivity and proximity to{" "}
          <strong>Gomti Nagar Extension, IT hubs, educational institutions and hospitals</strong>.
        </p>
      ),
    },
    {
      id: 2,
      heading: "Modern Villa Design & Living Experience",
      content: (
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
          The villas at <strong>BBD Ambrosia</strong> are designed with a focus on modern architecture, natural
          light and ventilation. Every home is planned to provide maximum comfort, functional space and elegant
          aesthetics. Wide roads, landscaped greenery and open areas create a peaceful living environment where
          residents can enjoy a healthy lifestyle. The project is ideal for those who prefer low-density living
          with privacy and comfort.
        </p>
      ),
    },
    {
      id: 3,
      heading: "Location Advantage Of BBD Ambrosia Estate",
      content: (
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
          Located on <strong>Faizabad Road near BBD Green City</strong>, the project enjoys excellent
          connectivity to major parts of Lucknow. The location provides smooth access to{" "}
          <strong>Gomti Nagar Extension, Shaheed Path, Indira Nagar and Hazratganj</strong>. It is also close
          to key landmarks like{" "}
          <strong>BBD University, schools, hospitals, shopping centers and daily conveniences</strong>. This
          makes BBD Ambrosia Estate a perfect choice for families as well as working professionals.
        </p>
      ),
    },
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12">

      {/* Read More Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-[#487800] hover:text-[#3a6200] transition-colors mb-4"
      >
        {isExpanded ? "Read Less..." : "Read More..."}
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Divider */}
      <hr className="border-gray-300 mb-4" />

      {/* Preview Lines — always visible */}
      {!isExpanded && (
        <div className="relative">

          {/* Preview Text */}
          <div className="overflow-hidden max-h-[80px]">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              About BBD Green City Lucknow
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed text-justify">
              <strong>BBD Ambrosia Estate</strong> is an upcoming premium residential villa project
              located near <strong>BBD Green City on Faizabad (Ayodhya) Road, Lucknow</strong>.
              Designed to offer a modern and peaceful lifestyle, this project brings together luxury
              living, green surroundings and excellent connectivity in one of Lucknow's fastest
              growing areas...
            </p>
          </div>

          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />

        </div>
      )}

      {/* Full Expandable Content */}
      {isExpanded && (
        <div className="flex flex-col gap-6 md:gap-10 mt-2 animate-in fade-in duration-300">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-2 md:gap-3">

              {/* Section Heading */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                {section.heading}
              </h3>

              {/* Section Content */}
              {section.content}

            </div>
          ))}

          {/* Read Less Button at Bottom */}
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-2 text-sm md:text-base text-[#487800] font-semibold hover:text-[#3a6200] transition-colors"
          >
            <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
            Read Less
          </button>

        </div>
      )}

    </div>
  )
}