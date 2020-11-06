import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const CellContainer = styled.button`
  background-color: white;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
`;
export type CellValue = "X" | "O" | undefined;

type CellProps = {
  value: CellValue;
  toggle(index: number): void;
  index: number;
};

export const Cell: FC<CellProps> = ({ value, toggle, index }): ReactElement => {
  return (
    <CellContainer onClick={() => toggle(index)}>
      {value === "O" ? "O" : value ? "X" : null}
    </CellContainer>
  );
};
