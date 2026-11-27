import { Section } from '@/components/ui'
import './App.css'

// Página provisoria: las secciones reales llegan desde la fase 3 (ver README).
export function App() {
  return (
    <main>
      <Section theme="dark" className="placeholder">
        <h1 className="text-display">Mateo Maldini</h1>
        <p className="text-title placeholder__role">Desarrollador de software</p>
        <p className="text-mono text-muted">Sitio en construcción</p>
      </Section>
    </main>
  )
}
