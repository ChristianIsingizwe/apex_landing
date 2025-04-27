import Link from "next/link"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">DevGenius</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
            Benefits
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Button asChild variant="outline" className="ml-2">
            <Link href="#book-call">Book a Call</Link>
          </Button>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
