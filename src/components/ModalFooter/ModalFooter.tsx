import React, { ReactNode } from "react"

// ts
import { Align } from "./styled"

// styled
import { StyledModalFooter } from "./styled"

interface Props {
  align?: Align
  children?: ReactNode
}

const ModalFooter = ({ align = "end", children }: Props) => {
  return <StyledModalFooter align={align}>{children}</StyledModalFooter>
}

export default ModalFooter
