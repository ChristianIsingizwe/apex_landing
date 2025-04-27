"use client"

import Image from "next/image"

export default function PartnersMarquee() {
  // Logos data
  const logos = [
    { name: "Company 1", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 2", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 3", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 4", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 5", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Company 6", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-xl font-semibold mb-8">Trusted by Industry Leaders</h2>
        <div className="w-full overflow-hidden">
          <div className="flex space-x-8 py-4">
            {logos.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
