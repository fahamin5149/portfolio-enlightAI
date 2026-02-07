"use client"

import { HeroScene } from "./hero-scene"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Title */}
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Computer Vision / NLP / Voice AI</p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Enlight
          <span className="gradient-text">AI</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          From Concept to Deployment
        </p>

        {/* Description */}
        <p
          className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          EnlightAI delivers enterprise-grade AI with full-stack development
          and cloud deployment. We transform your ideas into scalable,
          production-ready systems.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={() => scrollToSection("services")}
            className="group rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full border border-foreground bg-transparent px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
