import type { Metadata } from "next"
import Hero from "@/components/hero"
import Header from "@/components/header"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import About from "@/components/about"
import PartnersMarquee from "@/components/partners-marquee"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "DevGenius | Software Engineering Excellence",
  description: "We help companies develop high-quality projects and deliver on time. Remote team based in Rwanda.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <PartnersMarquee />
      <Benefits />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
