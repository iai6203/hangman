import React from "react"

// styled
import { StyledModalHeader } from "./styled"

interface Props {
  title: string
}

const ModalHeader = ({ title }: Props) => {
  return (
    <StyledModalHeader>
      <h4>{title}</h4>
    </StyledModalHeader>
  )
}

export default ModalHeader
