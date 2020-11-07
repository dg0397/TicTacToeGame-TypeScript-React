import React, { FC } from 'react'
import { Winner } from './Board'

type ResetScreenProps = {
    onReset():void;
    winner: Winner
}

export const ResetScreen:FC<ResetScreenProps> = ({onReset,winner}) => {
    return (
        <>
            <p>
                {
                    winner !== 'tie'? 
                    `The Winner is ${winner}`:
                    `It's a tie` 
                }
            </p>
            <button onClick = {onReset}>Reset</button>
        </>
    )
}
