export default function LocationAdvantages() {

  const locations = [
    { place: "Dr. Akhilesh Das Gupta School", time: "1-Min" },
    { place: "Crown Mall", time: "3-Mins" },
    { place: "Gomti Nagar Railway Station", time: "7-10 Mins" },
    { place: "Amar Shaheed Path", time: "6 Mins" },
    { place: "Chandan Hospital", time: "5 Mins" },
    { place: "Outer Ring Road", time: "4 Mins" },
    
  ];

  return (
    <div className="w-full px-8 md:px-16 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold  mb-6 text-[#487800]">
          BBD Ambrosia Estate - Prime Location Advantages
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
          Located near BBD Green City on Faizabad Road, Lucknow, BBD Ambrosia
          Estate offers excellent connectivity to major landmarks, educational
          institutions, healthcare facilities and entertainment hubs.
        </p>
      </div>

      {/* Content - Locations + Map */}
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Location List */}
        <div className="flex-1 flex flex-col gap-5">
          {locations.map((item, index) => (
            <div key={index} className="text-center md:text-left text-gray-700">
              {item.place}:{" "}
              <span className="font-bold">{item.time}</span>
            </div>
          ))}
        </div>

        {/* Google Map Embed */}
        <div className="flex-1 w-full h-[380px] rounded overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9!2d80.9!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  );
}