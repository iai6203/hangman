import React, { useMemo } from "react"
import { flow, split, map, includes } from "lodash/fp"

import { StyledGuessContainer, StyledLetter } from "./styled"

interface Props {
  answer: string
  correctLetters: string[]
}

const Guess = ({ answer, correctLetters }: Props) => {
  const guessLetters = useMemo(() => {
    return flow(
      split(""),
      map((letter) => (includes(letter)(correctLetters) ? letter : ""))
    )(answer)
  }, [answer, correctLetters])

  return (
    <StyledGuessContainer>
      {guessLetters.map((letter, idx) => (
        <StyledLetter key={idx}>{letter}</StyledLetter>
      ))}
    </StyledGuessContainer>
  )
}

export default Guess
