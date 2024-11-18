import Header from "./components/Header.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Button from "./components/functional/Button.jsx";
function App() {
  const [gameOver, setGameOver] = useState(true);
  const [hit, setHit] = useState(0)
  const [miss, setMiss] = useState(0)
  function handleUpdateScore(clickResult) {
    if (clickResult === 'hit') {
      setHit(prevState => prevState + 1)
    } else {
      setMiss(prevState => prevState + 1)
    }
  }
  function handleUpdateGameStatus(status) {
    if (!status) {
      setHit(0)
      setMiss(0)
    }
    setGameOver(status)
  }
  return (
    <div className="flex flex-col place-content-center">
      <Header />
      <ScoreBoard hit={hit} miss={miss} />
      <GameBoard
        updateScore={handleUpdateScore}
        gameOver={gameOver}
        setGameStatus={handleUpdateGameStatus}
      />
      <Button
        text={gameOver ? "Start Game" : "Restart"}
        classes="self-center mt-8"
        clickEvent={() => handleUpdateGameStatus(!gameOver)}
      />
    </div>
  )
}

export default App
