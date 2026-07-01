import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover px-5 py-2.5',
  secondary: 'border border-border text-fg hover:bg-bg-subtle px-5 py-2.5',
  ghost: 'text-fg-muted hover:text-accent hover:bg-bg-subtle p-2.5',
}

interface CommonProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

type AsAnchor = CommonProps &
  { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'>

type AsButton = CommonProps &
  { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

type ButtonProps = AsAnchor | AsButton

/** Botón reutilizable: se renderiza como <a> si recibe `href`, o como <button> si no. */
export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { href: _href, ...buttonProps } = props
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
