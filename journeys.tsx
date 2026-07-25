import { ArrowUpRight, Building2, User } from 'lucide-react'
import { Reveal } from './reveal'

const journeys = [
  {
    id: 'organizations',
    eyebrow: 'For Organizations',
    icon: Building2,
    title: 'A movement intelligence platform for your workforce.',
    body: 'Understand vitality, burnout risk, and movement health across your teams — then act on it with on-site corporate wellness programs.',
    href: '#platform',
    cta: 'Explore the platform',
    dark: true,
  },
  {
    id: 'individuals',
    eyebrow: 'For Individuals',
    icon: User,
    title: 'Personal training built around your data, not guesswork.',
    body: 'A clear journey from assessment to personalized programming, coaching, and measurable reassessment every 8–12 weeks.',
    href: '#training',
    cta: 'See the client journey',
    dark: false,
  },
]

export function Journeys() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 sm:pt-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          One brand, two journeys
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Choose your path into human performance.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {journeys.map((j, i) => (
          <Reveal key={j.id} delay={i * 100}>
            <a
              id={j.id}
              href={j.href}
              className={`group flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 sm:p-10 ${
                j.dark
                  ? 'border-transparent bg-secondary text-secondary-foreground hover:shadow-[0_30px_80px_rgba(15,15,15,0.25)]'
                  : 'border-border bg-card text-card-foreground hover:border-foreground/20 hover:shadow-[0_30px_80px_rgba(15,15,15,0.08)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide ${
                      j.dark ? 'bg-primary/15 text-primary' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <j.icon className="h-3.5 w-3.5" />
                    {j.eyebrow}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      j.dark ? 'text-secondary-foreground/60' : 'text-muted-foreground'
                    }`}
                  />
                </div>
                <h3 className="mt-8 max-w-md text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {j.title}
                </h3>
                <p
                  className={`mt-4 max-w-md text-pretty leading-relaxed ${
                    j.dark ? 'text-secondary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {j.body}
                </p>
              </div>
              <span className="mt-10 text-sm font-medium text-primary">
                {j.cta} →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
