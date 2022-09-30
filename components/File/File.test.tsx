import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import File from './File'

// unmount component after each test due to 'render'
afterEach(cleanup)

describe('File Component', () => {
  render(<File />)
  const file = screen.getByTestId('file')

  it('renders the file component', () => {
    expect(file).toBeInTheDocument()
  })

  it('changes the state of the component based on clicks', () => {
    fireEvent.click(file)
    expect(file).toHaveClass('selected')
    fireEvent.dblClick(file)
    expect(file).not.toHaveClass('selected')
  })
})
