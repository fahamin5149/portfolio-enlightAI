"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingCard } from "./floating-card"
import { ArrowRight } from "lucide-react"

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  gradient: string
}

const projects: Project[] = [
  {
    title: "RetailVision Pro",
    category: "Computer Vision",
    description:
      "Real-time retail analytics platform with object detection, people counting, and heat mapping for brick-and-mortar stores.",
    tags: ["YOLO", "Python", "AWS", "React"],
    gradient: "from-blue-600/80 to-cyan-600/80",
  },
  {
    title: "DocuMind AI",
    category: "Document Intelligence",
    description:
      "Enterprise document processing system with OCR, data extraction, and automated classification for financial documents.",
    tags: ["OCR", "Python", "GCP", "Next.js"],
    gradient: "from-amber-600/80 to-orange-600/80",
  },
  {
    title: "ConversAI Hub",
    category: "Conversational AI",
    description:
      "Multi-channel customer support platform with RAG-powered responses, sentiment routing, and seamless agent handoff.",
    tags: ["RAG", "LLMs", "Node.js", "React"],
    gradient: "from-purple-600/80 to-pink-600/80",
  },
  {
    title: "SecureWatch",
    category: "Video Analytics",
    description:
      "Intelligent video surveillance system with real-time anomaly detection, license plate recognition, and automated alerts.",
    tags: ["Faster R-CNN", "C++", "Azure", "Python"],
    gradient: "from-red-600/80 to-rose-600/80",
  },
  {
    title: "VoiceCare Assistant",
    category: "Voice AI",
    description:
      "HIPAA-compliant voice assistant for healthcare with appointment scheduling, symptom assessment, and EHR integration.",
    tags: ["Voice AI", "NLP", "AWS", "React"],
    gradient: "from-emerald-600/80 to-teal-600/80",
  },
  {
    title: "SentimentPulse",
    category: "NLP Analytics",
    description:
      "Real-time financial sentiment analysis dashboard tracking market mood across news, social media, and earnings calls.",
    tags: ["NLP", "Python", "Next.js", "GCP"],
    gradient: "from-indigo-600/80 to-violet-600/80",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Featured <span className="font-medium">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions we&apos;ve built for enterprises across
            healthcare, finance, retail, and security.
          </p>
        </AnimateOnScroll>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.title}
              animation="fadeInUp"
              delay={index * 100}
            >
              <FloatingCard className="h-full">
                <a
                  href="#"
                  className="group block rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden h-full transition-all duration-500 hover:border-foreground/20 hover:shadow-xl"
                >
                  {/* Gradient Placeholder Image */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid opacity-20" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-black/30 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </FloatingCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
