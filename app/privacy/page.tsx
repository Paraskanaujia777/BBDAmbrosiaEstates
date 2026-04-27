import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {

  const sections = [
    {
      id: 1,
      heading: "Information We Collect",
      content: "We collect information you provide directly to us, such as your name, phone number and email address when you fill out our enquiry form on the website.",
    },
    {
      id: 2,
      heading: "How We Use Your Information",
      content: "We use the information we collect to contact you about properties, send updates and respond to your enquiries. We may also send you updates to the mobile number or email id registered with us.",
    },
    {
      id: 3,
      heading: "Information Sharing",
      content: "We do not sell or share your personal information with third parties without your consent. Your data is used solely for the purpose of providing you with information about our properties.",
    },
    {
      id: 4,
      heading: "Data Security",
      content: "We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.",
    },
    {
      id: 5,
      heading: "Your Rights",
      content: "You have the right to access, update or delete your personal information at any time. To exercise these rights, please contact us through the enquiry form on our website.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-6">
        Privacy Policy
      </h1>
      <Separator className="mb-6 md:mb-8" />
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
        This Privacy Policy describes how we collect, use and protect your personal information when you use our website.
      </p>
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