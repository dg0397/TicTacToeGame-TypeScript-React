import React, { useState } from 'react';
import { Board, Winner  } from './Board'
import styled from 'styled-components'
import { StartScreen } from './StartScreen';
import { ResetScreen } from './ResetScreen'
import { motion } from 'framer-motion';

const variants = {
  start: { 
    opacity: 1, 
    scale: 1, 
    width: "200px", 
    height: "100px", 
    transition: { 
      type: "spring", 
      duration : '0.8'
    }
  },
  hidden : { 
    opacity : 0, 
    scale : 0.8
  },
  game : {
    width : "500px",
    height : "500px",
    transition: { 
      type: "spring", 
      duration : '0.8'
    }
  },
  reset: {  
    width: "300px", 
    height: "200px", 
    transition: { 
      type: "spring", 
      duration : '0.8'
    }
  }
}

const BoardContainer = styled(motion.div).attrs(()=>({
  initial:'hidden',
  variants
}))`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius:16px;
  box-shadow: -6px 10px 30px 4px rgba(0,0,0,.3);
  border:15px solid white;
`
type GameState = 'start' | 'game' | 'reset';

function App() {
  const [ winner,setWinner ] = useState<Winner>();
  const [ gameState,setGameState ] = useState<GameState>('start');

  const onGameEnd = (winner:Winner) => {
    setWinner(winner)
    setGameState('reset')
  }

  const onReset = () => {
    setWinner(undefined)
    setGameState('game')
  }
  return (
    <BoardContainer animate = {gameState}>
      {
        {
          start : <StartScreen onStart = {() => setGameState('game')}/>,
          game : <Board onGameEnd = { onGameEnd }/>,
          reset : <ResetScreen winner = {winner} onReset = { onReset } />,
        }[gameState]
      }
    </BoardContainer>
  )
}

export default App;
