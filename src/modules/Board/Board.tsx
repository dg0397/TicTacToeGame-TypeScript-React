import React, { FC, useEffect, useState } from "react";
import { Cell, CellValue } from "../../Cell";
import styled from "styled-components";
import { DataUser, NumPlayers } from "../../App";

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  background-color: #999;
  height: 100%;
  width: 100%;
`;

export type Winner = CellValue | "tie" | string;

type BoardProps = {
  numOfPLayers : NumPlayers;
  onGameEnd(winner: Winner): void;
  userData : DataUser;
};

//prettier-ignore
const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8], //Horizontal 
  [0,3,6], [1,4,7], [2,5,8],//Vertical
  [0,4,8], [2,4,6] //Diagonal
];

export const Board: FC<BoardProps> = ({ onGameEnd,numOfPLayers,userData }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));
  const [secondPlayerTurn,setSecondPlayerTurn] = useState<boolean>(false)

  const currentShape: CellValue = userData.xUser === 'Computer' ? 
    cells.filter((cell) => cell).length % 2 ? "X" : "O":
    cells.filter((cell) => cell).length % 2 ? "O" : "X" ;

  const winningCondition = winningConditions.find((condition) => {
    const line = condition.map((cellIndex) => cells[cellIndex]);

    return line[0] && line.every((cellValue) => cellValue === line[0]);
  });

  const tie = cells.filter((c) => c).length === 9;

  const winningShape = winningCondition
    ? cells[winningCondition[0]]
    : undefined;

  useEffect(() => {
    if (winningShape) {
      return onGameEnd(winningShape);
    }
    if (tie) {
      return onGameEnd("tie");
    }
  }, [tie, winningShape, onGameEnd]);

  useEffect(()=>{
    if(numOfPLayers === '1' && secondPlayerTurn){
      const timer = setTimeout(() => {
        const possiblesCellsToCheck = cells.map( (cell,index) => cell === undefined ? index : null ).filter(Boolean)
        const randomIndexCell = Math.floor(Math.random() * possiblesCellsToCheck.length) 
        console.log(possiblesCellsToCheck,randomIndexCell)
        setCells((cells) => 
          cells.map((cell,i) => {
            return i !== possiblesCellsToCheck[randomIndexCell] ? cell : cell ? cell : currentShape 
          })
        );
        setSecondPlayerTurn(false)
      },1000)
      return () => clearTimeout(timer)
    }
  },[numOfPLayers,secondPlayerTurn,cells,currentShape])

  const toggleCell = (index: number) => {
    setCells((cells) =>
      cells.map((cell, i) => {
        return i !== index ? cell : cell ? cell : currentShape;
      })
    );
    setSecondPlayerTurn(true)
  };

  return (
    <BoardWrapper>
      {cells.map((cell, index: number) => {
        return (
          <Cell key={index} value={cell} index={index} toggle={toggleCell} />
        );
      })}
    </BoardWrapper>
  );
};
