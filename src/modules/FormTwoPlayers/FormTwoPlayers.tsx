import React, {FC} from 'react'
import {useForm} from 'react-hook-form';

type FormData = {
    xUserName: string;
    oUserName: string;
};

export type FormProps = {
    backButton():void
}


export const FormTwoPlayers:FC<FormProps> = ({backButton}) => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = handleSubmit(({xUserName,oUserName}) => {
        console.log({xUserName,oUserName})
    });

    return (
        <form onSubmit = {onSubmit} className = 'Form'>
            <label>
                Who want to be X(default value is X)
                <input ref = {register} type="text" name="xUserName" id="xUserName" placeholder = "Enter your Name" />
            </label>
            <label>
                Who want to be O(default value is O)
                <input ref = {register} type="text" name="oUserName" id="oUserName" placeholder = "Enter your Name"/>
            </label>
            <input type="submit" value="Next"/>
            <input type="button" value="back" onClick = {backButton}/>
        </form>
    )
}
