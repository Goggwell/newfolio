import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Button from './Button'
import Home from '@/pages/index'

// unmount component after each test due to 'render'
afterEach(cleanup)

describe('Button Component', () => {
  /**
   * Unit test
   * Normally done with shallow rendering (requires Enzyme)
   * Tests a component in isolation
   */
  it('renders the button component', () => {
    render(<Button />)
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
  })

  /**
   * Integration test
   * Tests multiple components and component children
   */
  it('changes the state of the title prop on click', () => {
    render(<Home />)
    const button = screen.getByTestId('button')
    expect(button).toHaveTextContent('This is a title')
    fireEvent.click(button)
    expect(button).toHaveTextContent('This is a different title')
  })
})
