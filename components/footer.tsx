"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { ArrowRight } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Computer Vision", href: "#services" },
    { label: "NLP & LLMs", href: "#services" },
    { label: "Voice AI", href: "#services" },
    { label: "Full-Stack Development", href: "#services" },
    { label: "Cloud Deployment", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Technology", href: "#technology" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <AnimateOnScroll animation="fadeInUp" className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/EnlightAI-icon-removebg.png"
                alt="EnlightAI"
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold tracking-tight">
                Enlight<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Delivering production-ready AI solutions with full-stack
              development and cloud deployment.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group"
            >
              Start a project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimateOnScroll>

          {/* Services Links */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Company Links */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Connect Links */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Email */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-1">Email us at</p>
              <a
                href="mailto:enlightai@gmail.com"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                enlightai@gmail.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EnlightAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
