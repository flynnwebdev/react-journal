import App from './App'
import '@testing-library/jest-dom'
import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('App component tests', () => {
    beforeEach(() => {
        render(<App />)
    })

    it('shows the journal heading', () => {
        expect(screen.getByRole('heading', { name: 'Journal' })).toBeInTheDocument()
        // expect(screen.getByText(/Journal/i)).toBeInTheDocument()
    })

    it('shows CategorySelection component when button clicked', () => {
        userEvent.click(screen.getByRole('button'))
        expect(screen.getByRole('heading', { name: 'Please select a category' })).toBeInTheDocument()
    })
})