import '@testing-library/jest-dom'
import { describe, expect, it, beforeEach } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('App component tests', () => {
  beforeEach(() => render(<App />))

  it('shows the Journal heading', () => {
    // expect(screen.getByText(/Journal/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Journal/ })).toBeInTheDocument()
  })

  it('shows CategorySelection component when button clicked', async() => {
    userEvent.click(screen.getByRole('button'))
    expect(await screen.getByRole('heading', { name: /Please select a category/ })).toBeInTheDocument()
  })
})