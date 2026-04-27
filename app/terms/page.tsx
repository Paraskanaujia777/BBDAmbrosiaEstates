import { Separator } from "@/components/ui/separator"

export default function TermsPage() {

  const sections = [
    {
      id: 1,
      heading: "Intellectual Property",
      content: "All content, images, logos, and other materials on this landing page are the property of respective project developer or its licensors. These properties are safeguarded by intellectual property laws, and users are expressly prohibited from copying, altering, distributing, or utilizing any content without obtaining prior written permission.",
    },
    {
      id: 2,
      heading: "Property Information",
      content: "This landing page's content, which includes details of the properties, costs, and availability, is subject to change at any time. The Company is not responsible for any inaccuracies or omissions in the information provided.",
    },
    {
      id: 3,
      heading: "User Obligations",
      content: "Users are obligated to furnish accurate and current information when submitting inquiries or requests via the landing page. Additionally, users must commit to refraining from engaging in any unlawful or harmful activities, such as hacking, spamming, or transmitting malicious software.",
    },
    {
      id: 4,
      heading: "Limitation of Liability",
      content: "The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or its content.",
    },
    {
      id: 5,
      heading: "Third Party Links",
      content: "This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them.",
    },
    {
      id: 6,
      heading: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Lucknow.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12">

      {/* Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-6">
        Terms & Conditions
      </h1>

      {/* Divider */}
      <Separator className="mb-6 md:mb-8" />

      {/* Intro */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
        Please be advised that accessing or utilizing the landing page implies
        the user's consent to abide by the following terms and conditions:
      </p>

      {/* Sections */}
      <div className="flex flex-col gap-6 md:gap-8">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-sm md:text-base font-bold text-gray-900">
              {section.heading}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}