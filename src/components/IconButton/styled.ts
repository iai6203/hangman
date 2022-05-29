import styled, { css } from "styled-components"

export type Color = "primary" | "warning"

interface StyledButtonProps {
  color: Color
}

export const StyledIconButton = styled.button<StyledButtonProps>`
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transition: transform 150ms;

  ${(props) => props.color === "primary" && css`
    color: var(--main-secondary);
    background-color: var(--main-primary);
  `};

  ${(props) => props.color === "warning" && css`
    color: var(--main-secondary);
    background-color: var(--main-warning);
  `};

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`
