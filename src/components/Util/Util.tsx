import React from "react"

// styled
import { StyledUtil } from "./styled"

// components
import Button from "../Button/Button"

interface Props {
  onShowHow: (e: React.MouseEvent) => void
}

const Util = ({ onShowHow }: Props) => {
  return (
    <StyledUtil>
      <Button color="info" onClick={onShowHow}>
        게임 방법
      </Button>
    </StyledUtil>
  )
}

export default Util
