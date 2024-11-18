import {useEffect, useRef, useState} from "react";

export default function Hole({hole, onHoleClicked, gameOver}) {
  let isClicked = useRef(false)

  useEffect(() => {
    return () => {
      if (!isClicked.current && hole.isActive && gameOver !== true) {
        onHoleClicked('miss')
      }
      isClicked.current = false
    }
  }, [hole])

  function handleHoleClicked() {
    // console.log(hole.id + ' clicked')
    if (isClicked.current || gameOver) return
    isClicked.current = true
    if (hole.isActive) {
      onHoleClicked('hit')
    }
  }

  return (
    <div
      className={"aspect-square rounded-full overflow-hidden " + (hole.isActive && !gameOver ? 'bg-red' : 'bg-blue')}
      onClick={handleHoleClicked}>
      {!gameOver && hole.isActive && <img
        src={"trump-" + hole.id + ".png" }
        alt={"Donald Trump"}
        style={{ '--animation-duration': `${2}s` }}
        className="translate-y-full animate-slideUpPauseDown"
      />}
    </div>
  )
}