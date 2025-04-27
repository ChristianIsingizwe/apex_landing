"use client"

import { useEffect } from "react"

export default function VisitorTracker() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Record visit time
    const visitStartTime = new Date()

    // Function to calculate time spent on page
    const trackTimeSpent = () => {
      const timeSpent = (new Date().getTime() - visitStartTime.getTime()) / 1000 // in seconds
      console.log(`User spent ${timeSpent} seconds on the page`)
    }

    // Set up a simple scroll tracker with debounce
    let scrollTimeout: NodeJS.Timeout | null = null
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)

      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.body.scrollHeight

        // Calculate scroll percentage
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100

        if (scrollPercentage > 75) {
          console.log("User has scrolled more than 75% of the page")
        }
      }, 100)
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("beforeunload", trackTimeSpent)

    // Clean up event listeners
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("beforeunload", trackTimeSpent)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
