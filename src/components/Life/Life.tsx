import React from "react"
import { StyledLifeContainer } from "./styled"

// styled
import { StyledTitle, StyledLifeIconContainer } from "./styled"

// components
import { HeartIcon } from "@heroicons/react/solid"

interface Props {
  remainingLife: number
}

const Life = ({ remainingLife }: Props) => {
  return (
    <StyledLifeContainer>
      <StyledTitle>남은 생명 : </StyledTitle>
      <StyledLifeIconContainer>
        {[...Array(remainingLife)].map((_, idx) => (
          <HeartIcon key={idx} width={24} height={24} color={"#f5364c"} />
        ))}
      </StyledLifeIconContainer>
    </StyledLifeContainer>
  )
}

export default Life
