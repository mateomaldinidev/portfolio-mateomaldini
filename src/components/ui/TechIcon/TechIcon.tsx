import { type TechId, tech } from '@/data/tech'
import { cx } from '@/lib/cx'
import './TechIcon.css'

type TechIconProps = {
  id: TechId
  size?: number
  /** Muestra el nombre al lado del logo. */
  withLabel?: boolean
  className?: string
}

/**
 * Logo de una tecnología (Simple Icons) en el color del texto. Al pasar el
 * mouse por el contenedor flota como una boya.
 */
export function TechIcon({ id, size = 24, withLabel = false, className }: TechIconProps) {
  const { label, icon } = tech[id]

  return (
    <span className={cx('tech-icon', className)}>
      <svg
        className="tech-icon__logo"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-hidden={withLabel}
        aria-label={withLabel ? undefined : label}
      >
        {!withLabel && <title>{label}</title>}
        <path d={icon.path} />
      </svg>
      {withLabel && <span className="tech-icon__label">{label}</span>}
    </span>
  )
}
