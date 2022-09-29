import React, { MouseEventHandler, ReactNode } from 'react'

export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  title?: string
  children?: ReactNode | JSX.Element
}

/**
 * Standard button component
 * @function Button
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - handler for button click events
 * @param {string?} title - title text of button
 * @param {ReactNode | JSX.Element?} children - HTML children to render
 * @returns {JSX.Element} - Rendered component
 */

const Button = ({ onClick, title, children }: IButtonProps) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {title}
      {children}
    </button>
  )
}

export default Button
