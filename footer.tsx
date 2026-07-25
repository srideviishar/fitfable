import { Mail } from 'lucide-react'
import { Wordmark } from './wordmark'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const columns = [
  {
    title: 'Organizations',
    links: [
      { label: 'Movement Intelligence Platform', href: '#platform' },
      { label: 'Corporate Wellness', href: '#corporate' },
      { label: 'Enterprise Inquiry', href: '#inquiry' },
    ],
  },
  {
    title: 'Individuals',
    links: [
      { label: 'Personal Training', href: '#training' },
      { label: 'Transformations', href: '#showcase' },
      { label: 'Coaching Inquiry', href: '#inquiry' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Founding Team', href: '#team' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Get in touch', href: '#inquiry' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark onDark />
            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-secondary-foreground/60">
              Movement intelligence software, evidence-based coaching, and
              corporate wellness — under one umbrella.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: InstagramIcon,
                  href: 'https://www.instagram.com/fitfableco?igsh=MTJnZ29yOHd0eHdwZQ%3D%3D&utm_source=qr',
                  label: 'Instagram',
                },
                { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/fitfable/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:coach@fitfable.in', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-secondary-foreground/50">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} FitFable. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-wide text-secondary-foreground/40">
            fitfable.org
          </p>
        </div>
      </div>
    </footer>
  )
}
