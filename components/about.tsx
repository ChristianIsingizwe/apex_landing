import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Remote Team with Global Impact</h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Founded in Rwanda, our team of passionate software engineers is dedicated to delivering exceptional
              software solutions. We combine technical expertise with a deep understanding of business needs to create
              products that make a difference.
            </p>
            <ul className="grid gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Custom software development tailored to your specific needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Product development from concept to market-ready solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Open source contributions that benefit the wider community</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Technical consulting to help you make informed decisions</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-xl" />
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our team collaborating"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
