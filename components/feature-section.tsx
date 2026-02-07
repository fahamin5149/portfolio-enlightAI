"use client"

import { FloatingCard } from "./floating-card"

const features = [
  {
    number: "01",
    title: "Immersive Design",
    description: "Create stunning 3D experiences that captivate your audience and leave lasting impressions.",
  },
  {
    number: "02",
    title: "Interactive Elements",
    description: "Every component responds to user interaction, creating a dynamic and engaging experience.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description: "Built with cutting-edge WebGL and Three.js for smooth, performant 3D rendering.",
  },
]

export function FeatureSection() {
  return (
    <section id="services" className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance">
          A new dimension of
          <br />
          <span className="font-medium">digital experiences</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-16">
          We craft immersive 3D websites that blur the line between the digital and physical world, built with WebGL and
          modern web technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FloatingCard key={feature.number}>
              <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 h-full transition-all hover:border-foreground/20 hover:shadow-xl">
                <span className="text-6xl font-light text-muted-foreground/30 group-hover:text-foreground/20 transition-colors">
                  {feature.number}
                </span>
                <h3 className="text-xl font-medium mt-4 mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  )
}
