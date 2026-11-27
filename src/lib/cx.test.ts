import { describe, expect, it } from 'vitest'
import { cx } from './cx'

describe('cx', () => {
  it('une las clases con un espacio', () => {
    expect(cx('box', 'box--interactive')).toBe('box box--interactive')
  })

  it('ignora valores falsos y vacíos', () => {
    expect(cx('button', false, null, undefined, '', 'button--primary')).toBe(
      'button button--primary',
    )
  })

  it('devuelve un string vacío si no hay clases', () => {
    expect(cx()).toBe('')
  })
})
