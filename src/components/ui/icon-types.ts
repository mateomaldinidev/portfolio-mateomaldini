import type { IconHandle } from '@animateicons/react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

/**
 * Cualquier ícono animado de @animateicons/react. Se pasa el componente
 * (no el elemento) para que quien lo usa pueda disparar la animación cuando
 * el mouse entra en el contenedor, no solo en el ícono.
 */
export type AnimatedIcon = ForwardRefExoticComponent<
  { size?: number; className?: string; 'aria-hidden'?: boolean } & RefAttributes<IconHandle>
>
