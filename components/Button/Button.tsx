import React from 'react'

interface ButtonProps {
  setToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  btnTitle: string
}

const Button = ({ setToggle, btnTitle }: ButtonProps) => {
  return (
    <button data-testid="button" onClick={setToggle}>
      {btnTitle}
    </button>
  )
}

export default Button
