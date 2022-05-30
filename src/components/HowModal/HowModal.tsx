import React from "react"

// styled
import { StyledContent } from "./styled"

// components
import Modal from "../Modal/Modal"
import ModalHeader from "../ModalHeader/ModalHeader"
import ModalBody from "../ModalBody/ModalBody"
import ModalFooter from "../ModalFooter/ModalFooter"
import Button from "../Button/Button"

interface Props {
  isOpened: boolean
  onClose: (e: React.MouseEvent) => void
}

const HowModal = ({ isOpened, onClose }: Props) => {
  return (
    <Modal isOpened={isOpened}>
      <ModalHeader title="게임 방법" />
      <ModalBody>
        <StyledContent>
          <ol>
            <li>키보드의 영문 글자를 입력하여 단어를 예상해보세요.</li>
            <li>만약 남은 생명을 모두 사용할 동안 단어를 맞추지 못한다면 게임에서 패배하게 됩니다.</li>
          </ol>
        </StyledContent>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>닫기</Button>
      </ModalFooter>
    </Modal>
  )
}

export default HowModal
