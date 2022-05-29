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
import { RefreshIcon } from "@heroicons/react/solid"

interface Props {
  isOpened: boolean
  onReplay: (e: React.MouseEvent) => void
}

const WinModal = ({ isOpened, onReplay }: Props) => {
  return (
    <Modal isOpened={isOpened}>
      <ModalHeader title="게임 승리" />
      <ModalBody>
        <StyledBody>
          <p>또 다른 도전을 원하면 아래 버튼을 눌러 새로운 게임을 시작하세요.</p>
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

export default WinModal
