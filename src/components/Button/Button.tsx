import React from "react"
import { button, ButtonVariants } from "./button.css"

export const Button: React.FC<ButtonVariants> = (props) => {
  const { color, size } = props || {}
  const buttonClass = button({ color, size })
  return (
    <button type="button" className={`${buttonClass}`}>
      Button
    </button>
  )
}
