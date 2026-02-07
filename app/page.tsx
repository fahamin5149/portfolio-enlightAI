import { Nav3D } from "@/components/nav-3d"
import { HeroScene } from "@/components/hero-scene"
import { FeatureSection } from "@/components/feature-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <HeroScene />
      <Nav3D />

      {/* Hero Content */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">WebGL / 3D / Interactive</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 text-balance">IMMERSIVE</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
            A highly immersive and interactive creative website that blurs the line between the real world and digital,
            built with WebGL.
          </p>
          <button className="rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium transition-all hover:scale-105 hover:shadow-xl">
            VIEW PROJECT →
          </button>
        </div>
      </section>

      <FeatureSection />
      <CTASection />

      {/* Footer */}
      <footer className="relative py-12 px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2026 Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
