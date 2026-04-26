'use client';
import AboutSection from "@/components/about";
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

        <AboutSection></AboutSection>

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
