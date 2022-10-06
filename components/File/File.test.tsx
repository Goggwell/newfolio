import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import File from './File'
import TestHome from '@/components/TestHome/TestHome'

// unmount component after each test due to 'render'
afterEach(cleanup)

describe('File Component', () => {
  // NOTE: you must rerender for every 'it/test' function, because if you use the same one the component does not update
  it('renders the file component', () => {
    render(<File />)
    const file = screen.getByTestId('file')
    expect(file).toBeInTheDocument()
  })

  it('changes the state of the component based on clicks', () => {
    render(<TestHome />)
    const file = screen.getAllByTestId('file')[0]
    fireEvent.click(file)
    expect(file).toHaveClass('selected')
  })
})
