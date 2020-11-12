import React, { FC } from "react";
import styled from "styled-components";
import { DataUser } from "../../App";
import { Winner } from "../Board/Board";

type ResetScreenProps = {
  onReset(): void;
  winner: Winner;
  userData : Partial<DataUser>;
};

const WinnerHeading = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  display: block;
`;

const ResetButton = styled.button`
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  background: none;
`;

export const ResetScreen: FC<ResetScreenProps> = ({ onReset, winner , userData}) => {
  return (
    <>
      <WinnerHeading>
        {winner !== "tie" ? `The Winner is ${userData.xUser}` : `It's a tie`}
      </WinnerHeading>
      <ResetButton onClick={onReset}>Reset Game</ResetButton>
    </>
  );
};
