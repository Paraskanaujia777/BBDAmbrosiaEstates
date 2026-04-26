import { Building, Cable, Cctv, Lock, SquareParking, Trees } from "lucide-react"

const amenities = [
  { icon: Building,      label: "Prime Location" },
  { icon: Cctv,          label: "Security CCTV"  },
  { icon: Trees,         label: "Kids Play Area"  },
  { icon: SquareParking, label: "Parking"         },
  { icon: Lock,          label: "24 HR Security"  },
  { icon: Cable,         label: "Power Backup"    },
]

function AllIcons() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12 my-4 md:my-8">

      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#487800] mb-3">
          BBD Ambrosia Estate - Amenities
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl text-[#487800]">
          Here are some amenities of BBD Ambrosia Estate
        </h3>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 justify-items-center">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer"
          >
            {/* Icon */}
            <div className="bg-[#487800]/10 group-hover:bg-[#487800]/20 rounded-full p-3 md:p-4 transition-colors">
              <item.icon
                className="text-[#487800]"
                size={32}
              />
            </div>

            {/* Label */}
            <span className="text-xs sm:text-sm md:text-base text-center font-medium text-gray-700">
              {item.label}
            </span>

          </div>
        ))}
      </div>

    </div>
  )
}

export default AllIcons