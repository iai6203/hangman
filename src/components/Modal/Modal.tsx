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
    <AnimatePresence exitBeforeEnter>
      {isOpened && (
        <StyledModal>
          <StyledMask variants={FadeIn} initial="hidden" animate="show" exit="hidden">
            <StyledCard variants={FadeUp} initial="hidden" animate="show" exit="hidden">
              {children}
            </StyledCard>
          </StyledMask>
        </StyledModal>
      )}
    </AnimatePresence>
  )
}

export default Modal
