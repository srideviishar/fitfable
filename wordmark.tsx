import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-lg font-semibold tracking-tight',
        className,
      )}
    >
      <Image
        src="/images/fitfable-logo.png"
        alt="FitFable logo"
        width={28}
        height={28}
        priority
        className="h-7 w-7 rounded-[7px] object-cover"
      />
      <span className={onDark ? 'text-secondary-foreground' : 'text-foreground'}>
        FitFable
      </span>
    </span>
  )
}
