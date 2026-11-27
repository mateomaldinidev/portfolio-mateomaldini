import { CopyIcon } from '@animateicons/react/lucide/copy-icon'
import { ExternalLinkIcon } from '@animateicons/react/lucide/external-link-icon'
import { GithubIcon } from '@animateicons/react/lucide/github-icon'
import { LinkedinIcon } from '@animateicons/react/lucide/linkedin-icon'
import { MailIcon } from '@animateicons/react/lucide/mail-icon'
import { MessageCircleIcon } from '@animateicons/react/lucide/message-circle-icon'
import { Box, Button, Section, type SectionTheme, TechIcon } from '@/components/ui'
import type { TechId } from '@/data/tech'
import './UiPage.css'

/*
 * Página interna para revisar el sistema de diseño (/ui). No forma parte del
 * sitio: muestra los tokens y los componentes base en los tres temas.
 */

const palette = [
  { name: 'Abismo', hex: '#070A1F', role: 'Fondo de las secciones oscuras y texto de las claras' },
  { name: 'Espuma', hex: '#EEF2F7', role: 'Fondo de las secciones claras y texto de las oscuras' },
  { name: 'Cobalto', hex: '#2B3BFF', role: 'Marca: links, olas y el fondo de Contacto' },
  { name: 'Sol', hex: '#FFD23F', role: 'Acento en secciones oscuras y en Contacto' },
  { name: 'Medusa', hex: '#FF5FA2', role: 'Solo el anillo del puntero sobre algo clickeable' },
] as const

const themes: { theme: SectionTheme; name: string; note: string }[] = [
  {
    theme: 'dark',
    name: 'Oscuro',
    note: 'Mar de noche. Fondo abismo, texto espuma y acento sol. Lo usan el hero y Skills.',
  },
  {
    theme: 'light',
    name: 'Claro',
    note: 'La orilla de día. Todo en negativo: fondo espuma, texto abismo y acento cobalto. Lo usan Proyectos y Sobre mí.',
  },
  {
    theme: 'cobalt',
    name: 'Cobalto',
    note: 'El cierre. Fondo cobalto, texto espuma y acento sol. Solo lo usa Contacto.',
  },
]

const frontend: TechId[] = ['react', 'tanstack', 'typescript', 'vite']
const backend: TechId[] = ['nestjs', 'node', 'postgresql']

const spacing = ['--space-2', '--space-4', '--space-5', '--space-6', '--space-7', '--space-8']

export function UiPage() {
  return (
    <main>
      <Section theme="dark" className="ui-intro">
        <a className="ui-back text-mono" href="/">
          mateomaldini.dev
        </a>
        <h1 className="text-section">Sistema de diseño</h1>
        <p className="text-lead text-muted">
          Colores, tipografías y componentes base del sitio. Cada bloque de abajo es el mismo
          contenido en uno de los tres temas, para ver cómo se invierte.
        </p>
      </Section>

      <Section theme="dark" aria-labelledby="ui-palette">
        <h2 id="ui-palette" className="text-title">
          Paleta
        </h2>
        <ul className="ui-swatches">
          {palette.map((color) => (
            <li key={color.name} className="ui-swatch">
              <span className="ui-swatch__chip" style={{ background: color.hex }} />
              <span className="ui-swatch__name">{color.name}</span>
              <span className="text-mono text-muted">{color.hex}</span>
              <span className="ui-swatch__role text-muted">{color.role}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-title ui-subhead">Espaciados</h2>
        <ul className="ui-spacing">
          {spacing.map((token) => (
            <li key={token}>
              <span className="ui-spacing__bar" style={{ width: `var(${token})` }} />
              <span className="text-mono text-muted">{token}</span>
            </li>
          ))}
        </ul>
      </Section>

      {themes.map(({ theme, name, note }) => (
        <Section key={theme} theme={theme} aria-labelledby={`ui-theme-${theme}`}>
          <div className="ui-theme-head">
            <h2 id={`ui-theme-${theme}`} className="text-title">
              Tema {name.toLowerCase()}
            </h2>
            <p className="text-muted">{note}</p>
          </div>

          <div className="ui-type">
            <p className="text-display">Mateo Maldini</p>
            <p className="text-section">Proyectos</p>
            <p className="text-title">Gestor de turnos para canchas de pádel</p>
            <p className="ui-body">
              Texto de lectura en Inter. Las líneas no pasan de 64 caracteres para que se lean
              cómodas, y el interlineado es amplio. Así se ven las descripciones de proyectos y los
              cuadros de Sobre mí.
            </p>
            <p className="text-mono text-muted">Mar del Plata, AR · 18:05</p>
          </div>

          <div className="ui-buttons">
            <Button href="#">Ver proyectos</Button>
            <Button href="#" variant="outline">
              Contacto
            </Button>
            <Button variant="outline" icon={GithubIcon}>
              GitHub
            </Button>
            <Button variant="outline" icon={ExternalLinkIcon}>
              Ver landing
            </Button>
          </div>

          <div className="ui-boxes">
            <Box interactive className="ui-box ui-box--wide">
              <h3 className="text-title">Frontend</h3>
              <ul className="ui-tech">
                {frontend.map((id) => (
                  <li key={id}>
                    <TechIcon id={id} withLabel />
                  </li>
                ))}
              </ul>
            </Box>
            <Box interactive className="ui-box">
              <h3 className="text-title">Backend</h3>
              <ul className="ui-tech">
                {backend.map((id) => (
                  <li key={id}>
                    <TechIcon id={id} withLabel />
                  </li>
                ))}
              </ul>
            </Box>
            <Box className="ui-box">
              <h3 className="text-title">Íconos animados</h3>
              <p className="text-muted ui-box__note">Se animan al pasar el mouse.</p>
              <ul className="ui-icons" aria-label="Íconos de ejemplo">
                <li>
                  <MailIcon size={24} aria-hidden />
                </li>
                <li>
                  <CopyIcon size={24} aria-hidden />
                </li>
                <li>
                  <GithubIcon size={24} aria-hidden />
                </li>
                <li>
                  <LinkedinIcon size={24} aria-hidden />
                </li>
                <li>
                  <MessageCircleIcon size={24} aria-hidden />
                </li>
              </ul>
            </Box>
          </div>
        </Section>
      ))}
    </main>
  )
}
