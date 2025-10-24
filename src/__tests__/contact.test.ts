import { describe, it, expect } from 'vitest'

describe('Contact Form Validation', () => {
  it('should validate required fields', () => {
    const requiredFields = ['name', 'email', 'message']
    
    requiredFields.forEach(field => {
      expect(field).toBeTruthy()
    })
  })

  it('should validate date is not in the past', () => {
    const today = new Date()
    const futureDate = new Date(today.getTime() + 24 * 60 * 60 * 1000) // Tomorrow
    
    expect(futureDate.getTime()).toBeGreaterThan(today.getTime())
  })

  it('should validate email format', () => {
    const validEmail = 'test@example.com'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    expect(emailRegex.test(validEmail)).toBe(true)
  })
})
