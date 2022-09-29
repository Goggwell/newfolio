import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  title?: string
  children?: ReactNode | JSX.Element
  backgroundColor?: string
  padding?: number
}

/**
 * Standard button component
 * @function Button
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - handler for button click events
 * @param {string} title - title text of button (must put)
 * @param {ReactNode | JSX.Element?} children - HTML children to render
 * @param {string?} backgroundColor - background color of button
 * @param {number?} padding - space within the button and around the button's content
 * @returns {JSX.Element} - Rendered component
 */

const Button = ({
  onClick,
  title = 'Default',
  children,
  backgroundColor,
  padding = 4,
}: IButtonProps) => {
  return (
    <button
      data-testid="button"
      onClick={onClick}
      className={styles.button}
      style={{
        backgroundColor,
        padding: `${padding}px`,
      }}
    >
      {title}
      {children}
    </button>
  )
}

export default Button
