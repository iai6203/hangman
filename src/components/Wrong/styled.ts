import styled from "styled-components"

export const StyledWrongContainer = styled.div`
  padding: 22px 0 0 0;
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
`

export const StyledTitle = styled.h6`
  color: var(--main-danger);
  font-size: 13px;
`

export const StyledWrongLetterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const StyledWrongLetter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: var(--main-secondary);
  font-weight: bold;
  border-radius: 4px;
  background-color: var(--main-danger);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`

export const StyledInformationText = styled.span`
  font-size: 11px;
`
