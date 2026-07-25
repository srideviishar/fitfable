import Image from 'next/image'
import { ClipboardList, PencilRuler, Dumbbell, RefreshCw } from 'lucide-react'
import { Reveal } from './reveal'

const steps = [
  {
    n: '01',
    icon: ClipboardList,
    title: 'Fitness Assessment',
    body: 'A full baseline of movement, strength, and mobility to see where you truly stand.',
  },
  {
    n: '02',
    icon: PencilRuler,
    title: 'Personalized Program Design',
    body: 'A training plan engineered around your body, goals, and schedule.',
  },
  {
    n: '03',
    icon: Dumbbell,
    title: 'Training, Nutrition & Tracking',
    body: 'Coaching, nutrition guidance, and continuous progress tracking week over week.',
  },
  {
    n: '04',
    icon: RefreshCw,
    title: 'Reassessment · 8–12 Weeks',
    body: 'We re-measure, prove the progress, and recalibrate the next phase.',
  },
]

export function TrainingJourney() {
  return (
    <section id="training" className="scroll-mt-24 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              For Individuals · Personal Training
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A clear path from where you are to where you refuse to stop.
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/transformation.png"
                alt="Client training with a personal coach in a modern gym"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <ol className="relative space-y-4">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 80}>
                  <div className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="flex flex-col items-center">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <step.icon className="h-5 w-5" />
                      </span>
                      {i < steps.length - 1 && (
                        <span className="mt-2 hidden w-px flex-1 bg-border sm:block" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          {step.n}
                        </span>
                        <h3 className="text-lg font-medium tracking-tight text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
