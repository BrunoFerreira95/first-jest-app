import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import MyComponent from '../MyComponent'

describe('Home', () => {
  it('renders a heading', () => {
    render(<MyComponent />)

    const heading = screen.getByRole('heading', {
      name: /Hello, world!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})