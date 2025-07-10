import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders landing page heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /landing page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})