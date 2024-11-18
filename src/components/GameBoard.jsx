import Section from "./layout/Section.jsx";
import {useEffect, useRef, useState} from "react";
import {holes} from "../data/holes.js";
import Hole from "./Hole.jsx";
export default function GameBoard({gameOver, updateScore, setGameStatus}) {
  const [gameHoles, setGameHoles] = useState(holes);
  const gameTimer = useRef(2000)

  useEffect(() => {
    if (gameOver) {
      return;
    }
    let rounds = 1

    const interval = setInterval(() => {
      handleUpdateActiveHoles()
      if (rounds === 8) {
        clearInterval(interval)
        setTimeout(()=> {
          setGameStatus(true)
          handleResetHoles()
        }, gameTimer.current)
      }
      rounds++
    }, gameTimer.current);
  },[gameOver]);

  function handleResetHoles() {
    setGameHoles(prevState =>
      prevState.map((hole, i) =>
        ({ ...hole, isActive: false })
    ))
  }
  function handleUpdateActiveHoles() {
    // Determine the amount of active holes:
    const activeHoleCount = Math.ceil(Math.random() * 3)

    // Set active holes:
    let activeIndexes = [];

    while (activeIndexes.length <= activeHoleCount - 1) {
     const randomIndex = Math.ceil(Math.random() * 9)
     if (!activeIndexes.includes(randomIndex)) {
       activeIndexes.push(randomIndex);
     }
    }

    setGameHoles((prevState) => prevState.map(
      (hole, i) =>
        activeIndexes.includes(i + 1) ? {...hole, isActive: true } : {...hole, isActive: false }
      ))
  }

  return (
    <Section
      color="white"
      spacing="center"
      classes="max-w-screen-md">
      <div className="grid justify-center grid-cols-3 gap-4 w-full mt-8">
        {gameHoles.map((block, index) => (
          <Hole
            key={index}
            hole={block}
            onHoleClicked={updateScore}
            gameOver={gameOver}
          />
        ))}
      </div>
    </Section>
  )
}