import Image from 'next/image'
import { Play, Quote } from 'lucide-react'
import { Reveal } from './reveal'

const transformations = [
  {
    name: 'Aarav M.',
    tag: '12-week program',
    quote:
      'The assessments made it obvious what was holding me back. First time training actually felt engineered for me.',
    stat: '−8% body fat',
  },
  {
    name: 'Priya K.',
    tag: 'Mobility & strength',
    quote:
      'My mobility scores nearly doubled. Reassessment day is genuinely the best part.',
    stat: '2× mobility score',
  },
  {
    name: 'Devansh R.',
    tag: 'Return to performance',
    quote:
      'Data-led coaching got me back to lifting pain-free without guessing.',
    stat: 'Pain-free in 10 wks',
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-24 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            In the field
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Real sessions. Real journeys.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/wellness-3.png"
                alt="Corporate wellness session in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play corporate wellness session film"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full glass-dark ring-1 ring-white/20 transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5 text-secondary-foreground" />
                </span>
              </button>
              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-secondary-foreground/70">
                  Corporate Wellness Sessions
                </p>
                <p className="text-lg font-medium text-secondary-foreground">
                  On-site mobility, filmed at HQ
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-full min-h-64 overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/wellness-2.png"
                alt="Strength and movement workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-secondary-foreground/70">
                  Workshops
                </p>
                <p className="text-lg font-medium text-secondary-foreground">
                  Strength & movement
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-16">
          <Reveal>
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              Client transformation journeys
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {transformations.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <Quote className="h-6 w-6 text-primary" />
                    <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.tag}</div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                      {t.stat}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
