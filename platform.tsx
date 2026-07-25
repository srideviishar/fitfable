import {
  HeartPulse,
  BatteryLow,
  CalendarX,
  Move,
  LineChart,
  LayoutDashboard,
} from 'lucide-react'
import { Reveal } from './reveal'

const insights = [
  {
    icon: HeartPulse,
    title: 'Employee vitality',
    body: 'A composite view of energy, recovery, and readiness across teams.',
  },
  {
    icon: BatteryLow,
    title: 'Burnout indicators',
    body: 'Early-warning signals surfaced before they impact performance.',
  },
  {
    icon: CalendarX,
    title: 'Absenteeism insights',
    body: 'Connect movement health trends to attendance and productivity.',
  },
  {
    icon: Move,
    title: 'Movement health',
    body: 'Mobility, posture, and function scored and tracked over time.',
  },
  {
    icon: LineChart,
    title: 'Performance analytics',
    body: 'Workforce-wide benchmarks that turn activity into direction.',
  },
  {
    icon: LayoutDashboard,
    title: 'Reporting & dashboards',
    body: 'Board-ready reporting with the depth your people team needs.',
  },
]

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          Workforce vitality
        </span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
          +12% QoQ
        </span>
      </div>
      <div className="mt-6 flex h-32 items-end gap-2" aria-hidden="true">
        {[42, 55, 48, 63, 58, 71, 68, 82, 76, 88].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i >= 8 ? 'bg-primary' : 'bg-muted'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { k: 'Vitality', v: '82' },
          { k: 'Recovery', v: '76' },
          { k: 'Mobility', v: '69' },
        ].map((s) => (
          <div key={s.k} className="rounded-xl bg-muted px-3 py-3">
            <div className="text-xl font-semibold tracking-tight text-foreground">
              {s.v}
            </div>
            <div className="text-xs text-muted-foreground">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-24 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Product · Movement Intelligence Platform
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Understand how your workforce actually moves.
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                FitFable turns movement and wellbeing signals into clear
                insights, so people teams can act early and leaders can invest
                where it matters.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <DashboardMock />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {insights.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
