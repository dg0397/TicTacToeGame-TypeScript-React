import React, {FC} from 'react'
import { NumPlayers } from '../../App'


type PlayersMenuProps = {
    setPlayers(num: NumPlayers): void;
}

export const PlayersMenu: FC<PlayersMenuProps> = ({setPlayers}) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
    }
    return (
        <div>
            <button value = '1'>One Player</button>
            <button value = '2'>Two Players</button>
        </div>
    )
}
