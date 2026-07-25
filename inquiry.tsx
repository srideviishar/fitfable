'use client'

import { useState, type FormEvent } from 'react'
import { Building2, User, Check, ArrowRight, Loader2 } from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Tab = 'enterprise' | 'individual'

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
  full = false,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  full?: boolean
}) {
  return (
    <div className={cn('flex flex-col gap-2', full && 'sm:col-span-2')}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-7 w-7" />
      </span>
      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
        Inquiry received.
      </h3>
      <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
        Thank you — a member of the FitFable team will be in touch within one
        business day.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-sm font-medium text-primary hover:underline"
      >
        Submit another inquiry
      </button>
    </div>
  )
}

export function Inquiry() {
  const [tab, setTab] = useState<Tab>('enterprise')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const labelMap: Record<string, string> =
      tab === 'enterprise'
        ? {
            'ent-name': 'Full name',
            'ent-email': 'Work email',
            'ent-company': 'Company',
            'ent-size': 'Team size',
            'ent-message': 'What are you looking to solve?',
          }
        : {
            'ind-name': 'Full name',
            'ind-email': 'Email',
            'ind-phone': 'Phone',
            'ind-goal': 'Primary goal',
            'ind-message': 'Anything we should know?',
          }

    const fields: Record<string, string> = {}
    for (const [key, value] of formData.entries()) {
      const label = labelMap[key] ?? key
      fields[label] = String(value)
    }

    setLoading(true)
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inquiryType: tab, fields }),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(result.error || 'Something went wrong sending your inquiry. Please try again.')
      }
    } catch {
      setError('Network error — please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="inquiry" className="scroll-mt-24 py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Get in touch
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Start the conversation.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Whether you&apos;re bringing wellness to your workforce or investing
              in yourself, choose your path below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 flex w-fit rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => {
                setTab('enterprise')
                setSubmitted(false)
                setError(null)
              }}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                tab === 'enterprise'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Building2 className="h-4 w-4" />
              Enterprise
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('individual')
                setSubmitted(false)
                setError(null)
              }}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                tab === 'individual'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <User className="h-4 w-4" />
              Individual
            </button>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_rgba(15,15,15,0.06)] sm:p-10">
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : tab === 'enterprise' ? (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    Enterprise Inquiry
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Corporate wellness & the movement intelligence platform.
                  </p>
                </div>
                <Field label="Full name" name="ent-name" placeholder="Jane Doe" />
                <Field label="Work email" name="ent-email" type="email" placeholder="jane@company.com" />
                <Field label="Company" name="ent-company" placeholder="Acme Inc." />
                <Field label="Team size" name="ent-size" placeholder="e.g. 250" required={false} />
                <Field
                  label="What are you looking to solve?"
                  name="ent-message"
                  placeholder="Tell us about your workforce goals"
                  full
                  required={false}
                />
                {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary disabled:opacity-60 sm:col-span-2"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Submit enterprise inquiry
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    Individual Coaching Inquiry
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Personal training, assessment, and progress tracking.
                  </p>
                </div>
                <Field label="Full name" name="ind-name" placeholder="Alex Rivera" />
                <Field label="Email" name="ind-email" type="email" placeholder="alex@email.com" />
                <Field label="Phone" name="ind-phone" type="tel" placeholder="+91 00000 00000" required={false} />
                <Field
                  label="Primary goal"
                  name="ind-goal"
                  placeholder="e.g. Mobility, strength, fat loss"
                  required={false}
                />
                <Field
                  label="Anything we should know?"
                  name="ind-message"
                  placeholder="Injuries, schedule, experience level"
                  full
                  required={false}
                />
                {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary disabled:opacity-60 sm:col-span-2"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Submit coaching inquiry
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
