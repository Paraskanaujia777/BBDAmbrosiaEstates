'use client';
import { useDialog } from "@/app/context/dialog-context";

export default function HeroSection() {
  const { openDialog } = useDialog()

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden mb-10 md:mb-20 mt-8 md:mt-16">

      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_vector-1697729858619-898edf822048?q=80&w=2414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

        <p className="text-xs md:text-sm tracking-widest mb-2 text-gray-200">
          Feel Free to Contact Us..
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
          Schedule A Visit —
        </h1>

        <button
          onClick={openDialog}
          className="btn-shine bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-sm font-medium text-sm md:text-base hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Enquire Now
        </button>

      </div>
    </div>
  );
}