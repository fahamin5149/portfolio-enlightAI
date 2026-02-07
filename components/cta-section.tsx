"use client"

import { FloatingCard } from "./floating-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FloatingCard>
          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-md p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
              Ready to enter the
              <br />
              <span className="font-medium">third dimension?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Let&apos;s create something extraordinary together. Transform your digital presence with immersive 3D
              experiences.
            </p>
            <Button size="lg" className="rounded-full px-8 gap-2 group">
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </FloatingCard>
      </div>
    </section>
  )
}
