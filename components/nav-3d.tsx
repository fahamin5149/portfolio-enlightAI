"use client"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Nav3D() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
        <img src="/enlightai.png" alt="EnlightAI" className="h-12" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm font-medium text-muted-foreground",
              "hover:text-foreground transition-colors duration-200",
              "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0",
              "after:bg-foreground after:transition-all after:duration-200",
              "hover:after:w-full",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button className="rounded-full border border-foreground bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background">
        Get Started
      </button>
    </nav>
  )
}
