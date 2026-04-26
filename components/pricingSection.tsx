
import Image from "next/image";
import { DialogCloseButton } from "./dialogForm";

export default function PricingSection() {


  const pricingData = [
    {
      id: 1,
      type: "Residential Villa",
      buildUpArea: "On Request",
      onDemand: "Request",
    },
  ];

  return (
    <div className="w-full px-8 md:px-16 py-16">

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#487800] mb-20 text-center">
        BBD Ambrosia Estate - Pricing
      </h2>

      {/* Content - Table + Image */}
      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Pricing Table */}
        <div className="flex-1 w-1/2">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">

              {/* Table Header */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">
                    Build-Up Area (sq.ft.)
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">
                    On Demand
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {pricingData.map((item) => (
                  <tr key={item.id} className="bg-white">

                    {/* Type */}
                    <td className="border border-gray-300 px-6 py-5 text-center text-gray-700">
                      {item.type}
                    </td>

                    {/* Build Up Area */}
                    <td className="border border-gray-300 px-6 py-5 text-center">
                      <button className="bg-[#6b7c2d] hover:bg-[#5a6a24] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        {item.buildUpArea}
                      </button>
                    </td>

                    {/* On Demand */}
                    <td className="border border-gray-300 px-6 py-5 text-center">
                      <button className="bg-[#4a5e1a] hover:bg-[#3a4e10] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                        {item.onDemand}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Cost Sheet Image */}
        <div className="w-1/2 flex flex-col items-center gap-3">
          <div className="border border-gray-300 shadow-sm rounded overflow-hidden w-[320px] h-[240px] relative cursor-pointer hover:opacity-90 transition-opacity">
            <Image
              src="https://images.unsplash.com/photo-1579532582937-16c108930bf6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Complete Costing Details"
              fill
              className="object-cover w-40%]"
            />
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Complete Costing Details
          </p>
        </div>

      </div>
    </div>
  );
}