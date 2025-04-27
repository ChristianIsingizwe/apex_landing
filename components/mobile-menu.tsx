"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-6">
            <Link
              href="#benefits"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Benefits
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Button asChild className="mt-4">
              <Link href="#book-call" onClick={closeMenu}>
                Book a Call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
