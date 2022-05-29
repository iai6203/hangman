import React, {ReactNode} from "react"
import { AnimatePresence } from "framer-motion"

// styled
import { StyledModal, StyledMask, StyledCard } from "./styled"

// variants
import { FadeIn, FadeUp } from "./variants"

interface Props {
  children?: ReactNode
  isOpened: boolean
}

const Modal = ({ children, isOpened }: Props) => {
  return (
    <AnimatePresence>
      {isOpened && (
        <StyledModal>
          <StyledMask variants={FadeIn} initial="hidden" animate="show">
            <StyledCard variants={FadeUp} initial="hidden" animate="show">
              {children}
            </StyledCard>
          </StyledMask>
        </StyledModal>
      )}
    </AnimatePresence>
  )
}

export default Modal
