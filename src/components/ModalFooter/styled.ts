import styled from "styled-components"

export type Align = "start" | "center" | "end"

interface StyledModalFooterProps {
  align: Align
}

const getAlignment = (align: Align): string => {
  switch (align) {
    case "start":
      return "start;"
    case "center":
      return "center;"
    case "end":
      return "end;"
  }
}

export const StyledModalFooter = styled.div<StyledModalFooterProps>`
  padding: 20px 24px;
  display: flex;
  justify-content: ${props => getAlignment(props.align)};
  border-top: 1px solid var(--main-secondary);
`
