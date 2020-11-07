import React, { FC, useEffect, useState } from "react";
import { Cell, CellValue } from "./Cell";
import styled from "styled-components";

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  background-color: #999;
  height: 100%;
  width: 100%;
`;

export type Winner = CellValue | "tie";

type BoardProps = {
  onGameEnd(winner: Winner): void;
};

//prettier-ignore
const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8], //Horizontal 
  [0,3,6], [1,4,7], [2,5,8],//Vertical
  [0,4,8], [2,4,6] //Diagonal
];

export const Board: FC<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  const currentShape: CellValue = cells.filter((cell) => cell).length % 2 ? "O" : "X";

  const winningCondition = winningConditions.find(condition => {
    const line = condition.map(cellIndex => cells[cellIndex]);

    return line[0] && line.every(cellValue => cellValue === line[0])  
    
  })

  const tie = cells.filter(c=>c).length === 9;

  const winningShape = winningCondition ? cells[winningCondition[0]] : undefined;

  useEffect(()=>{
    if(winningShape){
      return onGameEnd(winningShape)
    }
    if(tie){
      return onGameEnd('tie')
    }
  },[tie,winningShape,onGameEnd])

  const toggleCell = (index: number) => {
    setCells((cells) =>
      cells.map((cell, i) => {
        return i === index ? currentShape : cell;
      })
    );
    console.log(winningShape)
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
