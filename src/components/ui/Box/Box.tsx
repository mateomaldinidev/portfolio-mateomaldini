import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import './Box.css'

type BoxProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  /** Etiqueta HTML a usar: div, article, li... */
  as?: ElementType
  /** Si reacciona al mouse (borde en color de acento). */
  interactive?: boolean
}

/** Caja con borde fino: la unidad de la grilla del sitio. */
export function Box({
  as: Tag = 'div',
  interactive = false,
  className,
  children,
  ...rest
}: BoxProps) {
  return (
    <Tag className={cx('box', interactive && 'box--interactive', className)} {...rest}>
      {children}
    </Tag>
  )
}
