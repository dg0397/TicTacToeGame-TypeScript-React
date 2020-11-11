import React, { useMemo, useState } from "react";
import { Board, Winner } from "./modules/Board/Board";
import styled from "styled-components";
import { StartScreen } from "./modules/StartScreen/StartScreen";
import { ResetScreen } from "./modules/WinnerScreen/ResetScreen";
import { motion } from "framer-motion";

const variants = {
  start: {
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    "max-width": "500px",
    "max-height": "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    "max-width": "500px",
    "max-height": "500px",
  },
  game: {
    opacity: 1,
    scale: 1,
    width: "80vw",
    height: "80vw",
    "max-width": "500px",
    "max-height": "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    },
  },
  reset: {
    opacity: 1,
    scale: 1,
    width: "300px",
    height: "200px",
    "max-width": "500px",
    "max-height": "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    },
  },
};

const BoardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px rgba(0, 0, 0, 0.3);
  border: 15px solid white;
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: -3px 3px #00000066;
`;
type GameState =
  | "start"
  | "players-menu"
  | "Form1"
  | "Form2"
  | "game"
  | "reset";

type NumPlayers = 1 | 2 | undefined;

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>("start");
  const [numOfPlayers,setNumOfPlayers] = useState<NumPlayers>()

  const onGameEnd = (winner: Winner) => {
    setWinner(winner);
    setGameState("reset");
  };

  const onReset = () => {
    setWinner(undefined);
    setGameState("game");
  };

  const setPlayers

  const screens = useMemo(() => ({
    start: <StartScreen onStart={() => setGameState("game")} />,
    "players-menu": <></>,
    Form1: <></>,
    Form2: <></>,
    game: <Board onGameEnd={onGameEnd} />,
    reset: <ResetScreen winner={winner} onReset={onReset} />,
  }),[winner]);

  const currentScreen = screens[gameState];
  return (
    <>
      <Heading>TypeScript Tic-Tac-Toe</Heading>
      <BoardContainer animate={gameState}>{currentScreen}</BoardContainer>
    </>
  );
}

export default App;
