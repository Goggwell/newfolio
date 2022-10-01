import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Program from './Program'

// unmount component after each test due to 'render'
afterEach(cleanup)

describe('Program Component', () => {
  // NOTE: you must rerender for every 'it/test' function, because if you use the same one the component does not update
  it('renders the file component', () => {
    render(<Program />)
    const program = screen.getByTestId('program')
    expect(program).toBeInTheDocument()
  })

  it('drags the component on mouseDown event', () => {
    render(<Program />)
    const program = screen.getByTestId('program')
    const toolbar = screen.getByTestId('toolbar')
    const styles = getComputedStyle(program)
    expect(styles.transform).toBe('translate(0px,0px)')
    fireEvent.mouseDown(toolbar)
    expect(program).toHaveClass('react-draggable-dragging')
    fireEvent.mouseMove(document, { clientX: 200, clientY: 200 })
    fireEvent.mouseUp(toolbar)
    expect(program).toHaveClass('dragged') // can't read position of element for some reason, so we use drag ID to check
  })
})
