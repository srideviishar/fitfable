import { Reveal } from './reveal'

const metrics = [
  { value: '50+', label: 'Team Sessions Delivered' },
  { value: '100+', label: 'Assessments Completed' },
  { value: '1,000+', label: 'Coaching Hours' },
]

export function TrustBar() {
  return (
    <div className="relative z-20 mx-auto -mb-8 mt-12 max-w-5xl px-4 sm:-mb-10 sm:px-6 lg:mt-20">
      <Reveal>
        <div className="glass grid grid-cols-1 divide-y divide-border rounded-2xl border border-border shadow-[0_20px_60px_rgba(15,15,15,0.08)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center gap-1 px-6 py-6 text-center sm:py-8"
            >
              <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {m.value}
              </span>
              <span className="text-sm text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
