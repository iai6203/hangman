import React, { ReactNode } from "react"

// styled
import { StyledModalBody } from "./styled"

interface Props {
  children?: ReactNode
}

const ModalBody = ({ children }: Props) => {
  return <StyledModalBody>{children}</StyledModalBody>
}

export default ModalBody
