import { Separator } from "@/components/ui/separator"

export default function CookiesPage() {

  const sections = [
    {
      id: 1,
      heading: "What Are Cookies",
      content: "Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your experience better.",
    },
    {
      id: 2,
      heading: "How We Use Cookies",
      content: "We use cookies to improve your browsing experience, analyze site traffic, remember your preferences and personalize content based on your interests.",
    },
    {
      id: 3,
      heading: "Types of Cookies",
      content: "We use essential cookies that are necessary for the website to function, and analytics cookies that help us understand how visitors interact with our website.",
    },
    {
      id: 4,
      heading: "Managing Cookies",
      content: "You can control and manage cookies in your browser settings. Please note that disabling cookies may affect the functionality of this website.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-6">
        Cookies Policy
      </h1>
      <Separator className="mb-6 md:mb-8" />
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
        This Cookies Policy explains how we use cookies and similar technologies on our website.
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