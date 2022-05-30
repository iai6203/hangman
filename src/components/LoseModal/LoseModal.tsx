import React from "react"

// styled
import { StyledBody } from "./styled"

// components
import Modal from "../Modal/Modal"
import ModalHeader from "../ModalHeader/ModalHeader"
import ModalBody from "../ModalBody/ModalBody"
import ModalFooter from "../ModalFooter/ModalFooter"
import IconButton from "../IconButton/IconButton"

// icons
import { RefreshIcon } from "@heroicons/react/outline"

interface Props {
  isOpened: boolean
  answer: string
  onReplay: (e: React.MouseEvent) => void
}

const LoseModal = ({ isOpened, answer, onReplay }: Props) => {
  return (
    <Modal isOpened={isOpened}>
      <ModalHeader title="게임 패배" />
      <ModalBody>
        <StyledBody>
          <h6>{answer}</h6>
          <p>다시 도전하려면 아래 버튼을 눌러 새로운 게임을 시작하세요.</p>
        </StyledBody>
      </ModalBody>
      <ModalFooter align="center">
        <IconButton onClick={onReplay}>
          <RefreshIcon width={20} height={20} />
        </IconButton>
      </ModalFooter>
    </Modal>
  )
}

export default LoseModal
