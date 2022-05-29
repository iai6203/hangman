import React, { useMemo } from "react"
import { isEmpty } from "lodash/fp"

// styled
import {
  StyledWrongContainer,
  StyledTitle,
  StyledWrongLetterContainer,
  StyledWrongLetter,
  StyledInformationText,
} from "./styled"

interface Props {
  incorrectLetters: string[]
}

const Wrong = ({ incorrectLetters }: Props) => {
  const isWrongLetterExist = useMemo(() => {
    return !isEmpty(incorrectLetters)
  }, [incorrectLetters])

  return (
    <StyledWrongContainer>
      <StyledTitle>틀린 글자</StyledTitle>
      <StyledWrongLetterContainer>
        {isWrongLetterExist ? (
          incorrectLetters.map((letter, idx) => (
            <StyledWrongLetter key={idx}>{letter}</StyledWrongLetter>
          ))
        ) : (
          <StyledInformationText>틀린 글자가 없습니다.</StyledInformationText>
        )}
      </StyledWrongLetterContainer>
    </StyledWrongContainer>
  )
}

export default Wrong
