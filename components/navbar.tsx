"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Services", href: "services" },
  { label: "Technology", href: "technology" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const scrollToSection = useCallback((id: string) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src="/enlightai.png" alt="EnlightAI" className="h-12" />
            </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium text-muted-foreground",
                  "hover:text-foreground transition-colors duration-200",
                  "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0",
                  "after:bg-foreground after:transition-all after:duration-300",
                  "hover:after:w-full"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex rounded-full border border-foreground bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95"
          >
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-foreground text-background px-8 py-3 text-lg font-medium transition-all hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}
