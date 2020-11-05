import React, { FC, useState } from "react";
import styled from "styled-components";

const BoardWrapper = styled.div`
  background-color: #999;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
`;
const Cell = styled.div`
  background-color: #0a8dff;
`;

type CellValue = "x" | "o" | undefined;

type Winner = CellValue | "tie";

type BoardProps = {
  onGameEnd(winner: Winner): void;
};

export const Board: FC<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  return (
    <BoardWrapper>
      {cells.map((cell, index: number) => {
        return <Cell key={index} />;
      })}
    </BoardWrapper>
  );
};
