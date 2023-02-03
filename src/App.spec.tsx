import { render, screen } from '@testing-library/react'
import App from './App'

describe('render App', () => {
  it('should render', () => {
    expect(1).toBe(1)
  })

  it('should display elements', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /vite \+ react/i }),
    ).toBeInTheDocument()
  })
})
