import styled, { css } from "styled-components"

export type Color = "primary" | "info" | "warning"

interface StyledButtonProps {
  color: Color
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 18px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transition: transform 150ms;

  ${(props) => props.color === "primary" && css`
    color: var(--main-secondary);
    background-color: var(--main-primary);
  `};

  ${(props) => props.color === "info" && css`
    color: var(--main-secondary);
    background-color: var(--main-info);
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
