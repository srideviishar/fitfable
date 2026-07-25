import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  'Weekly mobility sessions',
  'Strength & movement workshops',
  'Ergonomic education',
  'Health campaigns',
  'Functional fitness assessments',
  'On-site corporate wellness programs',
]

export function CorporateWellness() {
  return (
    <section
      id="corporate"
      className="scroll-mt-24 bg-secondary py-28 text-secondary-foreground sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Services · Corporate Wellness
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Wellness programs your teams actually show up for.
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-secondary-foreground/70">
                Delivered on-site or hybrid, our sessions are designed by coaches
                and backed by movement data — turning wellbeing from a perk into
                a performance advantage.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-secondary-foreground">{s}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/wellness-1.png"
                  alt="Corporate mobility session in a modern office"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/wellness-2.png"
                  alt="Strength and movement workshop with a coach"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
