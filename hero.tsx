import Image from 'next/image'
import { ArrowRight, Activity } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <Activity className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono uppercase">Movement Intelligence</span>
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Human performance, engineered.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                FitFable unites movement intelligence software, evidence-based
                coaching, and corporate wellness under one umbrella — for the
                organizations that run on healthy people and the individuals who
                refuse to plateau.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#organizations"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary"
                >
                  For Organizations
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#individuals"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                >
                  For Individuals
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-secondary sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-movement.png"
                  alt="Athlete captured mid-movement with motion-tracking data points overlaid on the body"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full glass-dark px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-[11px] uppercase tracking-wide text-secondary-foreground">
                    Live motion capture
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
