import Image from 'next/image'
import { Reveal } from './reveal'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const founders = [
  {
    name: 'Akshay Raj',
    role: 'Co-Founder · Movement Coach (Personal Trainer)',
    image: '/images/founder-1.jpg',
    bio: 'A hands-on movement coach, Akshay leads personal training at FitFable — building assessment-driven programs that turn data into real, measurable transformation.',
  },
  {
    name: 'Sridevi Ishar',
    role: 'Co-Founder · Product Builder & Performance Coach',
    image: '/images/founder-2.png',
    bio: 'Sridevi builds the movement intelligence platform and shapes FitFable\u2019s coaching methodology, bringing together product thinking and evidence-based performance science.',
  },
]

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Meet the founding team
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Built by people who coach, and coaches who build.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            FitFable exists to make world-class human performance measurable and
            accessible — uniting movement science with software so more people
            and organizations can thrive.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card sm:flex-row">
                <div className="relative aspect-square w-full shrink-0 sm:w-44">
                  <Image
                    src={f.image}
                    alt={`Portrait of ${f.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {f.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-primary">
                      {f.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {f.bio}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    Connect
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
