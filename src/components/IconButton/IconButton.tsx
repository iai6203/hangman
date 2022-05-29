import React, { ReactNode } from "react"

// ts
import { Color } from "./styled"

// styled
import { StyledIconButton } from "./styled"

interface Props {
  title?: string
  color?: Color
  children: string | ReactNode
  onClick?: (e: React.MouseEvent) => void
}

const IconButton = ({ title, color = "primary", children, onClick }: Props) => {
  return (
    <StyledIconButton title={title} color={color} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}

export default IconButton
