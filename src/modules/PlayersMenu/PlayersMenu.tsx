import React, { FC } from 'react'
import styled from 'styled-components';
import { NumPlayers } from '../../App'
import { motion } from "framer-motion";


type PlayersMenuProps = {
    setPlayers(num: NumPlayers): void;
}

const MenuContainer = styled.div`
    display : flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const variants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(-50%, -50%, 0) scale(0.5)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0%, 0%, 0) scale(1)",
      border: "1px solid #1c1c1c",
      transition: {
        type: "spring",
        duration: "0.5",
      },
    },
  };
  
  const MenuButton = styled(motion.button).attrs(() => ({
    initial: "hidden",
    variants,
  }))`
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

export const PlayersMenu: FC<PlayersMenuProps> = ({setPlayers}) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const value:any= e.currentTarget.value;
        setPlayers(value)
    }
    return (
        <MenuContainer>
            <MenuButton onClick = {handleClick} value = '1' animate="visible">One Player</MenuButton>
            <MenuButton onClick = {handleClick} value = '2' animate="visible">Two Players</MenuButton>
        </MenuContainer>
    )
}
