import { useIconHover } from '@animateicons/react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import type { AnimatedIcon } from '../icon-types'
import './Button.css'

type Variant = 'primary' | 'outline'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  /** Ícono animado que se mueve cuando el mouse entra en el botón. */
  icon?: AnimatedIcon
  className?: string
}

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: never }

export type ButtonProps = ButtonAsLink | ButtonAsButton

/**
 * Botón rectangular, solo texto (y un ícono opcional), sin flechas.
 * Al pasar el mouse el color lo llena de abajo hacia arriba, como el agua.
 * Con href se renderiza como <a>; sin href, como <button>.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', icon: Icon, className, ...rest } = props
  const { ref: iconRef, triggerProps } = useIconHover()

  const classes = cx('button', `button--${variant}`, className)
  const content = (
    <>
      <span className="button__water" aria-hidden="true" />
      <span className="button__label">
        {Icon && <Icon ref={iconRef} size={18} className="button__icon" aria-hidden />}
        {children}
      </span>
    </>
  )

  if (rest.href !== undefined) {
    const anchorProps = rest as Omit<ButtonAsLink, keyof CommonProps>
    return (
      <a {...anchorProps} {...triggerProps} className={classes}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps>
  return (
    <button type="button" {...buttonProps} {...triggerProps} className={classes}>
      {content}
    </button>
  )
}
