import {
  type SimpleIcon,
  siAngular,
  siGit,
  siGithub,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTanstack,
  siTypescript,
  siVite,
} from 'simple-icons'

/**
 * Registro de tecnologías. Proyectos y Skills referencian una tecnología por
 * su id; sumar una nueva es agregar una entrada acá.
 */
export const tech = {
  react: { label: 'React', icon: siReact },
  tanstack: { label: 'TanStack', icon: siTanstack },
  typescript: { label: 'TypeScript', icon: siTypescript },
  vite: { label: 'Vite', icon: siVite },
  nestjs: { label: 'NestJS', icon: siNestjs },
  node: { label: 'Node.js', icon: siNodedotjs },
  postgresql: { label: 'PostgreSQL', icon: siPostgresql },
  git: { label: 'Git', icon: siGit },
  github: { label: 'GitHub', icon: siGithub },
  angular: { label: 'Angular', icon: siAngular },
} as const satisfies Record<string, { label: string; icon: SimpleIcon }>

export type TechId = keyof typeof tech

export const techIds = Object.keys(tech) as TechId[]
