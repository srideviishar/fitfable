'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Wordmark } from './wordmark'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Corporate Wellness', href: '#corporate' },
  { label: 'Personal Training', href: '#training' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Team', href: '#team' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled && 'glass border-border shadow-[0_8px_30px_rgba(15,15,15,0.06)]',
          )}
        >
          <a href="#top" className="flex items-center" aria-label="FitFable home">
            <Wordmark />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#inquiry"
              className="group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary sm:inline-flex"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-background/95 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-3 text-base font-medium text-background"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
