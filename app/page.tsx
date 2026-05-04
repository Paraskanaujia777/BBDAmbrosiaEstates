'use client';
import AboutSection from "@/components/about";
import AllIcons from "@/components/allIcons";
import AmenitiesSection from "@/components/amenities";
import FloorPlanSection from "@/components/floorPlans";
import SiteVisitFooter from "@/components/footer";
import PropertyHero from "@/components/heroPropertySection";
import HeroSection from "@/components/heroSection";
import LocationAdvantages from "@/components/Location";
import ReadMoreSection from "@/components/moreDetails";
import PricingSection from "@/components/pricingSection";

export default function Home() {
  return (
    <div>
      <main>

        {/* Hero Carousel */}
        <div id="overview">
          <PropertyHero />
        </div>

        {/* About + Contact Form */}
        <AboutSection />

       


        {/* Floor Plans */}
        <div id="floorplan">
          <FloorPlanSection />
        </div>

        {/* Pricing */}
        <div id="pricing">
          <PricingSection />
        </div>

        
        {/* Hero CTA Section */}
        <HeroSection />


         {/* Amenities Icons */}
        <AllIcons />

        {/* Amenities Section */}
        <div id="amenities">
          <AmenitiesSection />
        </div>

        

        {/* Location */}
        <div id="location">
          <LocationAdvantages />
        </div>

        {/* Read More */}
        <ReadMoreSection />

        {/* Footer / Contact */}
        <div id="contact">
          <SiteVisitFooter />
        </div>

      </main>
    </div>
  )
}