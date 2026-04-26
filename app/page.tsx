import AllIcons from "@/components/allIcons";
import AmenitiesSection from "@/components/amenities";
import ContactForm from "@/components/contactForm";
import SiteVisitFooter from "@/components/footer";
import PropertyHero from "@/components/heroPropertySection";
import HeroSection from "@/components/heroSection";
import LocationAdvantages from "@/components/Location";
import ReadMoreSection from "@/components/moreDetails";
import PricingSection from "@/components/pricingSection";

export default function Home() {
  return (
    <div>
      <main >

        {/* <HeroSectionTop></HeroSectionTop> */}
        <PropertyHero></PropertyHero>

        {/* form and data */}

        <div>

          <div className="flex flex-row gap-4 m-6 h-full">

            <div className="w-1/2 ">
              <h1 className="font-bold text-4xl mb-4 text-[#487800] ">BBD Ambrosia Estate – Premium Villas on BBD Green City Faizabad Road, Lucknow</h1>
              <p className="font-2xl ">BBD Ambrosia Estate is an upcoming premium residential villa project located near BBD Green City on Faizabad (Ayodhya) Road, Lucknow, designed to redefine modern luxury living. Developed in one of Lucknow’s fastest-growing corridors, this exclusive villa community offers a perfect blend of comfort, elegance and eco-friendly living.</p>
              <br />

              <p> What makes this project truly special is its location. Situated on Faizabad Road, one of Lucknow’s fastest-developing areas. It provides excellent connectivity to Gomti Nagar, Shaheed Path and key parts of the city. From reputed schools and colleges to hospitals, shopping centers and daily conveniences—everything is just a short drive away.</p>
              <br />

              <p>These villas are not just about luxury; they are also designed with a vision for sustainable and eco-friendly living. With landscaped gardens, open areas and a well-planned layout, residents can enjoy a healthier and more relaxed lifestyle away from the city’s noise, yet stay fully connected to it.</p>
              <br />
              <p> Whether you are planning to upgrade your lifestyle or looking for a smart real estate investment in Lucknow, BBD Ambrosia Estate stands out as a promising choice. With its premium design, strategic location and future growth potential, it offers both comfort for today and value for tomorrow.</p>
            </div>

            <div className="w-1/2">
              <ContactForm></ContactForm>

            </div>

          </div>

        </div>

        {/* all icons  */}

        <AllIcons></AllIcons>


        {/* Hero section  */}
        <HeroSection></HeroSection>


        {/* Pricing */}

        <PricingSection></PricingSection>


        {/* Location Advantages */}

        <LocationAdvantages></LocationAdvantages>

        {/* Amenities section */}

        <AmenitiesSection></AmenitiesSection>

        {/* More Details  */}

        <ReadMoreSection></ReadMoreSection>



        {/* Footer */}

        <SiteVisitFooter></SiteVisitFooter>


        



      </main >

    </div >
  );
}
