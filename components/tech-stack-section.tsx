"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { Monitor, Server, Zap, Cloud, Globe, Code, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Technology {
  name: string
  color: string
}

interface TechCategory {
  title: string
  icon: LucideIcon
  technologies: Technology[]
}

// Logo component for technologies
function TechLogo({ tech }: { tech: Technology }) {
  const getLogoContent = () => {
    switch (tech.name) {
      case "React":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-10 h-10"
          />
        )
      case "Next.js":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="w-10 h-10 dark:invert"
          />
        )
      case "Angular":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            alt="Angular"
            className="w-10 h-10"
          />
        )
      case "Node.js":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-10 h-10"
          />
        )
      case "Python":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="w-10 h-10"
          />
        )
      case "C++":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            className="w-10 h-10"
          />
        )
      case "AWS":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            className="w-12 h-10"
          />
        )
      case "Google Cloud":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
            alt="Google Cloud"
            className="w-10 h-10"
          />
        )
      case "Azure":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
            alt="Azure"
            className="w-10 h-10"
          />
        )
      case "End-to-End Web Apps":
        return <Globe className="h-8 w-8 text-primary" />
      default:
        return <Code className="h-8 w-8 text-muted-foreground" />
    }
  }

  return (
    <div className="flex items-center justify-center w-16 h-16">
      {getLogoContent()}
    </div>
  )
}

interface Technology {
  name: string
  color: string
}

interface TechCategory {
  title: string
  icon: LucideIcon
  technologies: Technology[]
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#f8fafc" },
      { name: "Angular", color: "#dd0031" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", color: "#68a063" },
      { name: "Python", color: "#3776ab" },
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    technologies: [
      { name: "C++", color: "#00599c" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      { name: "AWS", color: "#ff9900" },
      { name: "Google Cloud", color: "#4285f4" },
      { name: "Azure", color: "#0078d4" },
    ],
  },
  {
    title: "Full-Stack",
    icon: Globe,
    technologies: [
      { name: "End-to-End Web Apps", color: "#8b5cf6" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="technology" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            Built With The Best
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Technology <span className="font-medium">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading tools and frameworks to deliver
            robust, scalable, and performant solutions.
          </p>
        </AnimateOnScroll>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category, catIndex) => (
            <AnimateOnScroll
              key={category.title}
              animation="fadeInUp"
              delay={catIndex * 100}
            >
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full transition-all duration-300 hover:border-foreground/20 hover:shadow-lg group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-foreground/5 text-foreground transition-colors group-hover:bg-foreground/10">
                    <category.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 group/tech"
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0 transition-transform duration-300 group-hover/tech:scale-150"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span className="text-sm text-foreground/80 group-hover/tech:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom banner */}
        <AnimateOnScroll animation="fadeInUp" delay={300} className="mt-12">
          <div className="rounded-2xl border border-border bg-gradient-to-r from-foreground/[0.02] via-muted/30 to-foreground/[0.02] p-8 text-center">
            <p className="text-muted-foreground text-sm md:text-base">
              Our stack is continuously evolving. We adopt new technologies that
              deliver{" "}
              <span className="text-foreground font-medium">measurable value</span>{" "}
              to your projects — never for the sake of trends.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Logo Scroller */}
        <AnimateOnScroll animation="fadeInUp" delay={400} className="mt-16">
          <div className="relative overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Scrolling Container */}
            <div className="flex gap-8 animate-scroll-left">
              {/* First set of logos */}
              {[...techCategories.flatMap(cat => cat.technologies), ...techCategories.flatMap(cat => cat.technologies)].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 group"
                  title={tech.name}
                >
                  <TechLogo tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
