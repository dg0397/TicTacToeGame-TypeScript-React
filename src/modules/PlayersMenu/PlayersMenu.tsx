import React, {FC} from 'react'
import { NumPlayers } from '../../App'


type PlayersMenuProps = {
    setPlayers(num: NumPlayers): void;
}

export const PlayersMenu: FC<PlayersMenuProps> = ({setPlayers}) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const value:any= e.currentTarget.value;

        setPlayers(value)
    }
    return (
        <div>
            <button onClick = {handleClick} value = '1'>One Player</button>
            <button onClick = {handleClick} value = '2'>Two Players</button>
        </div>
    )
}
