import React, { useCallback, useMemo, useState } from "react";
import { Board, Winner } from "./modules/Board/Board";
import styled from "styled-components";
import { StartScreen } from "./modules/StartScreen/StartScreen";
import { ResetScreen } from "./modules/WinnerScreen/ResetScreen";
import { PlayersMenu } from './modules/PlayersMenu/PlayersMenu';
import { FormTwoPlayers } from "./modules/FormTwoPlayers/FormTwoPlayers";
import { FormSinglePlayer } from "./modules/FormSinglePlayer/FormSinglePlayer";
import { motion } from "framer-motion";

const variants = {
  start: {
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    maxWidth: "500px",
    maxHeigth: "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    maxWidth: "500px",
    maxHeight: "500px",
  },
  playersMenu: {
    opacity: 1,
    scale: 1,
    width: "60%",
    height: "200px",
    maxWidth: "500px",
    maxHeigth: "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    }
  },
  form1: {
    opacity: 1,
    scale: 1,
    width: "60%",
    height: "auto",
    maxWidth: "500px",
    maxHeigth: "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    }
  },
  form2: {
    opacity: 1,
    scale: 1,
    width: "60%",
    height: "auto",
    maxWidth: "500px",
    maxHeigth: "500px",
    transition: {
      type: "spring",
      duration: "0.8",
    }
  },
  game: {
    opacity: 1,
    scale: 1,
    width: "80vw",
    height: "80vw",
    maxWidth: "500px",
    maxHeigth: "500px",
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
    maxWidth: "500px",
    maxHeigth: "500px",
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
  | "playersMenu"
  | "form1"
  | "form2"
  | "game"
  | "reset";

export type NumPlayers = "1" | "2" | undefined;

export type DataUser = {
  xUser?: string | undefined;
  oUser?: string | undefined;
}

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>("start");
  const [numOfPlayers,setNumOfPlayers] = useState<NumPlayers>()
  const [userData,setUserData] = useState<Partial<DataUser>>({});

  const onGameEnd = useCallback((winner: Winner) => {
    const winnerGame = winner === 'X'? userData.xUser :  winner === 'O'?  userData.oUser : "tie"
    setWinner(winnerGame);
    setGameState("reset");
    },[userData.oUser,userData.xUser],
  );

  const onReset = () => {
    setWinner(undefined);
    setGameState("game");
  };

  const setPlayers = (num : NumPlayers) => {
    if(num === "1"){
      setNumOfPlayers(num);
      setGameState("form1");
    }else if( num === "2"){
      setNumOfPlayers(num);
      setGameState("form2");
    }
  };

  const backButton = useCallback(()=> {
    setGameState('playersMenu');
    },[],
  );
  const nextButton = useCallback((data:Partial<DataUser>)=>{
    setGameState('game')
    setUserData(data)
    },[]
  );

  const screens = useMemo(() => ({
    start: <StartScreen onStart={() => setGameState("playersMenu")} />,
    playersMenu: <PlayersMenu setPlayers = {setPlayers}/>,
    form1: <FormSinglePlayer backButton = {backButton} nextButton = {nextButton}/>,
    form2: <FormTwoPlayers backButton = {backButton} nextButton = {nextButton}/>,
    game: <Board onGameEnd={onGameEnd} numOfPLayers = {numOfPlayers} userData = {userData}/>,
    reset: <ResetScreen winner={winner} onReset={onReset} />,
  }),[winner,numOfPlayers,backButton,nextButton,onGameEnd,userData]);

  const currentScreen = screens[gameState];
  return (
    <>
      <Heading>TypeScript Tic-Tac-Toe</Heading>
      <BoardContainer animate={gameState}>{currentScreen}</BoardContainer>
    </>
  );
}

export default App;
