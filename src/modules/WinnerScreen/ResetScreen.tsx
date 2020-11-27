import React, { FC } from "react";
import styled from "styled-components";
import { Winner } from "../Board/Board";

type ResetScreenProps = {
  onReset(): void;
  winner: Winner;
};

const WinnerHeading = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  display: block;
`;

const ResetButton = styled.button`
  margin-bottom:1rem;
    padding:.5rem;
    border-radius:5px;
    font-size: 2rem;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    background: none;
    transition: all .5s ease;
    &:hover{
        background-color: rgba(0,0,0,.2)
    }
`;

export const ResetScreen: FC<ResetScreenProps> = ({ onReset, winner}) => {
  return (
    <>
      <WinnerHeading>
        {winner !== "tie" ? `The Winner is ${winner}` : `It's a tie`}
      </WinnerHeading>
      <ResetButton onClick={onReset}>Reset Game</ResetButton>
    </>
  );
};
