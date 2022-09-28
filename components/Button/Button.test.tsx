import { render, screen, cleanup } from '@testing-library/react'
import Button from './Button'

afterEach(() => {
  cleanup()
})

describe('Button Component', () => {
  const setToggle = jest.fn()
  render(<Button setToggle={setToggle} btnTitle="Click Here" />)
  const button = screen.getByTestId('button')

  it('renders the button component', () => {
    expect(button).toBeInTheDocument()
  })

  it('displays the button title', () => {
    expect(button).toHaveTextContent('Click Here')
  })
})
