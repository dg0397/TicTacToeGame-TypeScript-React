import React from 'react';
import { Board } from './Board'
import styled from 'styled-components'

const BoardContainer = styled.div`
  background-color: white;
  height:500px;
  width:500px;
  border-radius:16px;
  box-shadow: -6px 10px 30px 4px rgba(0,0,0,.3);
  border:15px solid white;
`

function App() {
  return (
    <BoardContainer>
      <Board onGameEnd = { () => {}} />
    </BoardContainer>
  )
}

export default App;
