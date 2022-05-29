import React, { ReactNode } from "react"
import { Color } from "./styled"

// styled
import { StyledButton } from "./styled"

interface Props {
  title?: string
  color?: Color
  children: string | ReactNode
  onClick?: (e: React.MouseEvent) => void
}

const Button = ({ title, color = "primary", children, onClick }: Props) => {
  return (
    <StyledButton title={title} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
