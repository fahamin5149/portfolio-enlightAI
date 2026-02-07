"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AnimateOnScroll } from "./animate-on-scroll"
import { Send, Mail, MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  "Computer Vision",
  "NLP & LLMs",
  "Voice AI",
  "Full-Stack Development",
  "Cloud Deployment",
  "Custom AI Solution",
  "Other",
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success("Message sent successfully!", {
      description: `Thanks ${data.name}, we'll get back to you within 24 hours.`,
    })
    reset()
    setIsSubmitting(false)
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 hover:border-foreground/20"
  const errorClasses = "text-xs text-destructive mt-1.5"

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Get in <span className="font-medium">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Tell us about your project
            and we&apos;ll craft the perfect solution.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <AnimateOnScroll animation="slideInLeft" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Start a Conversation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you have a clear project scope or just an idea, we&apos;re
                  here to help you navigate the AI landscape and find the right
                  solution.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a
                      href="mailto:enlightai@gmail.com"
                      className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                    >
                      enlightai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-105">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Based in</p>
                    <p className="text-sm font-medium text-foreground">
                      Remote — Serving Globally
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time card */}
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium">
                    Typical response time
                  </span>
                </div>
                <p className="text-2xl font-bold">
                  Under 24 hours
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  For initial project consultations
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="slideInRight" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 space-y-6"
            >
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-card text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClasses}>{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  {...register("message")}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className={errorClasses}>{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-foreground text-background py-3.5 text-sm font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground/60">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
