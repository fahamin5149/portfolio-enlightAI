"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingCard } from "./floating-card"
import {
  Eye,
  Brain,
  Mic,
  Target,
  Layers,
  User,
  FileText,
  Video,
  Database,
  MessageSquare,
  BarChart3,
  AlignLeft,
  Settings,
  Code,
  Headphones,
  Volume2,
  Copy,
  Bot,
  Type,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SubService {
  name: string
  icon: LucideIcon
}

interface ServiceCategory {
  title: string
  description: string
  icon: LucideIcon
  subServices: SubService[]
}

const services: ServiceCategory[] = [
  {
    title: "Computer Vision",
    description:
      "Transform visual data into actionable intelligence with state-of-the-art vision models deployed at scale.",
    icon: Eye,
    subServices: [
      { name: "Object Detection (YOLO, Faster R-CNN)", icon: Target },
      { name: "Image Segmentation", icon: Layers },
      { name: "Facial Recognition", icon: User },
      { name: "OCR & Document Processing", icon: FileText },
      { name: "Real-time Video Analytics", icon: Video },
      { name: "Medical Imaging Analysis", icon: Eye },
      { name: "Quality Control & Inspection", icon: Target },
    ],
  },
  {
    title: "NLP & LLMs",
    description:
      "Harness the power of language models with custom fine-tuning, RAG pipelines, and intelligent conversational systems.",
    icon: Brain,
    subServices: [
      { name: "RAG (Retrieval-Augmented Generation)", icon: Database },
      { name: "Chatbots & Conversational AI", icon: MessageSquare },
      { name: "Sentiment Analysis", icon: BarChart3 },
      { name: "Text Summarization", icon: AlignLeft },
      { name: "Fine-tuned LLM Solutions", icon: Settings },
      { name: "Prompt Engineering", icon: Code },
    ],
  },
  {
    title: "Voice AI",
    description:
      "Build natural voice interfaces with cutting-edge speech synthesis, recognition, and real-time processing.",
    icon: Mic,
    subServices: [
      { name: "Speech-to-Text", icon: Headphones },
      { name: "Text-to-Speech", icon: Volume2 },
      { name: "Voice Cloning", icon: Copy },
      { name: "Voice Assistant Development", icon: Bot },
      { name: "Real-time Transcription", icon: Type },
      { name: "Voice Biometrics", icon: User },
      { name: "Multi-language Support", icon: MessageSquare },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="font-medium">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions engineered for production environments.
            From prototype to deployment, we deliver systems that scale.
          </p>
        </AnimateOnScroll>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fadeInUp"
              delay={index * 150}
            >
              <FloatingCard>
                <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 h-full transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary/20">
                    <service.icon className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <div className="space-y-3">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.name}
                        className="flex items-start gap-3 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300"
                      >
                        <sub.icon className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                        <span>{sub.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
