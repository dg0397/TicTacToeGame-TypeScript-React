import React, { useState } from 'react';
import { Board, Winner  } from './Board'
import styled from 'styled-components'
import { StartScreen } from './StartScreen';
import { ResetScreen } from './ResetScreen'

const BoardContainer = styled.div`
  background-color: white;
  height:500px;
  width:500px;
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
    <BoardContainer>
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
