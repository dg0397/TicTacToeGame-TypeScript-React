import React from 'react';
import styled from 'styled-components'

const BoardContainer = styled.div`
  background-color: white;
  height:500px;
  width:500px;
  border-radius:16px;
  box-shadow: -6px 10px 30px 4px rgba(0,0,0,.3);
  border:20px solid white;
`
const Board = styled.div`
  background-color: #999;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <BoardContainer>
      <Board>Test</Board>
    </BoardContainer>
  )
}

export default App;
