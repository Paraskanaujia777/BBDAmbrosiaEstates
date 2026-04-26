import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./contactForm";

function AboutSection() {

    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-[#487800] leading-tight">
                        BBD Ambrosia Estate – Premium Villas on BBD Green City Faizabad Road, Lucknow
                    </h1>

                    <p className="text-sm md:text-base text-gray-700 mb-4">
                        BBD Ambrosia Estate is an upcoming premium residential villa project located near BBD Green City on Faizabad (Ayodhya) Road, Lucknow, designed to redefine modern luxury living. Developed in one of Lucknow’s fastest-growing corridors, this exclusive villa community offers a perfect blend of comfort, elegance and eco-friendly living.
                    </p>

                    <p className="text-sm md:text-base text-gray-700 mb-4">
                        What makes this project truly special is its location. Situated on Faizabad Road, one of Lucknow’s fastest-developing areas, it provides excellent connectivity to Gomti Nagar, Shaheed Path and key parts of the city.
                    </p>

                    <p className="text-sm md:text-base text-gray-700 mb-4">
                        From reputed schools and colleges to hospitals, shopping centers and daily conveniences—everything is just a short drive away.
                    </p>

                    <p className="text-sm md:text-base text-gray-700 mb-4">
                        These villas are not just about luxury; they are also designed with a vision for sustainable and eco-friendly living. With landscaped gardens, open areas and a well-planned layout, residents can enjoy a healthier and more relaxed lifestyle.
                    </p>

                    <p className="text-sm md:text-base text-gray-700">
                        Whether you are planning to upgrade your lifestyle or looking for a smart real estate investment in Lucknow, BBD Ambrosia Estate stands out as a promising choice.
                    </p>
                </div>

                {/* RIGHT FORM */}
                <div className="w-full lg:w-1/2">
                    <Card className="shadow-lg rounded-2xl">
                        <CardContent className="p-4 md:p-6">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>

    )
}

export default AboutSection;