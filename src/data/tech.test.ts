import { describe, expect, it } from 'vitest'
import { tech, techIds } from './tech'

describe('registro de tecnologías', () => {
  it.each(techIds)('%s tiene nombre y un ícono dibujable', (id) => {
    const entry = tech[id]
    expect(entry.label.length).toBeGreaterThan(0)
    expect(entry.icon.path).toMatch(/^M/)
  })

  it('no repite nombres', () => {
    const labels = techIds.map((id) => tech[id].label)
    expect(new Set(labels).size).toBe(labels.length)
  })
})
