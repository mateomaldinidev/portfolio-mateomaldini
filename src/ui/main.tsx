import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/fonts'
import '@/styles/global.css'
import { UiPage } from './UiPage'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No se encontró el elemento #root en ui/index.html')
}

createRoot(root).render(
  <StrictMode>
    <UiPage />
  </StrictMode>,
)
