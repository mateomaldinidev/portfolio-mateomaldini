import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { Container } from '../Container/Container'
import './Section.css'

export type SectionTheme = 'dark' | 'light' | 'cobalt'

type SectionProps = HTMLAttributes<HTMLElement> & {
  theme: SectionTheme
  children: ReactNode
  /** Si es false, el contenido ocupa todo el ancho (sin Container). */
  contained?: boolean
}

/**
 * Bloque de página con su tema. Todo lo que está adentro toma los colores
 * del tema, así que las secciones claras y oscuras se invierten solas.
 */
export function Section({ theme, contained = true, className, children, ...rest }: SectionProps) {
  return (
    <section data-theme={theme} className={cx('section', className)} {...rest}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
