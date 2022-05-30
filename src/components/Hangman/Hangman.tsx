import React, { useEffect, useState, useMemo, useCallback } from "react"
import { concat, filter, split, includes, upperCase, isEmpty } from "lodash/fp"
import Inko from "inko"
import { getRandomWord } from "../../data/words"

// styled
import { StyledContainer, StyledTitle } from "./styled"

// components
import Life from "../Life/Life"
import Guess from "../Guess/Guess"
import Wrong from "../Wrong/Wrong"
import Util from "../Util/Util"
import WinModal from "../WinModal/WinModal"
import LoseModal from "../LoseModal/LoseModal"
import HowModal from "../HowModal/HowModal"

type Status = "WAITING" | "IN_PROGRESS" | "WIN" | "LOSE"

const MAX_LIFE = 5

function App() {
  const inko = useMemo(() => new Inko(), [])

  const [status, setStatus] = useState<Status>("WAITING")
  const [remainingLife, setRemainingLife] = useState<number>(0)
  const [answer, setAnswer] = useState<string | null>(null)
  const [correctLetters, setCorrectLetters] = useState<string[]>([])
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([])
  const [remainingLetters, setRemainingLetters] = useState<string[]>([])

  const [howModalIsOpened, setHowModalIsOpened] = useState<boolean>(false)

  /**
   * 새로운 게임을 시작한다.
   */
  const gameStart = useCallback(() => {
    const newWord = upperCase(getRandomWord())

    setRemainingLife(MAX_LIFE)
    setAnswer(newWord)
    setCorrectLetters([])
    setIncorrectLetters([])
    setRemainingLetters(split("")(newWord))
    setStatus("IN_PROGRESS")
  }, [])

  /**
   * 사용자가 입력한 키가 유효한지 확인해준다.
   * @param key: 사용자가 입력한 키
   * @return boolean
   */
  const isValidKey = useCallback((key: string): boolean => {
    const regExp = /^[A-Z]{1}$/g
    return regExp.test(key)
  }, [])

  useEffect(() => {
    /**
     * 키보드를 입력했을 때 이벤트
     * @param e: KeyboardEvent
     */
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = upperCase(inko.ko2en(e.key))

      if (!isValidKey(key)) {
        console.warn(`'${key}'는 유효하지 않습니다.`)
        return
      }

      const isInclude = includes(key)(split("")(answer))
      const isAlreacyInput = includes(key)(
        concat(correctLetters)(incorrectLetters)
      )

      if (isAlreacyInput) return

      if (isInclude) {
        setCorrectLetters((prev) => concat(prev)(key))
        setRemainingLetters(prev => filter((letter: string) => letter !== key)(prev))
      }
      else {
        setIncorrectLetters((prev) => concat(prev)(key))
        setRemainingLife((prev) => prev - 1 < 0 ? 0 : prev - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [inko, answer, correctLetters, incorrectLetters, remainingLetters, isValidKey])

  useEffect(() => {
    if (remainingLife === 0) setStatus("LOSE")
  }, [remainingLife])

  useEffect(() => {
    if (isEmpty(remainingLetters)) {
      setStatus("WIN")
    }
  }, [remainingLetters])

  useEffect(() => {
    gameStart()
  }, [gameStart])

  return (
    <>
      <StyledContainer>
        <StyledTitle>HANGMAN</StyledTitle>
        <Life remainingLife={remainingLife} />
        {answer && <Guess answer={answer} correctLetters={correctLetters} />}
        <Wrong incorrectLetters={incorrectLetters} />
        <Util onShowHow={() => setHowModalIsOpened(true)} />
      </StyledContainer>

      <WinModal isOpened={status === "WIN"} onReplay={() => gameStart()} />
      <LoseModal isOpened={status === "LOSE"} onReplay={() => gameStart()} />
      <HowModal isOpened={howModalIsOpened} onClose={() => setHowModalIsOpened(false)} />
    </>
  )
}

export default App
