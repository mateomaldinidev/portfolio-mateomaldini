import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import './Container.css'

type ContainerProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode }

/** Limita el ancho del contenido y agrega los márgenes laterales. */
export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cx('container', className)} {...rest}>
      {children}
    </div>
  )
}
