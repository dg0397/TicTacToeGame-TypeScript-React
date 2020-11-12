import React, {FC} from 'react'
import {useForm} from 'react-hook-form';
import { FormProps } from '../FormTwoPlayers/FormTwoPlayers';

type FormData = {
    userShape: "X" | 'O' ;
    userName: string;
};


export const FormSinglePlayer:FC<FormProps> = ({backButton,nextButton}) => {
    const {register, handleSubmit} = useForm<FormData>()

    const onSubmit = handleSubmit(({userName,userShape})  => {
        const shape = userShape === "X" ? 'xUser' : 'oUser';
        const name = userName ? userName : userShape;
        const data = {
            [shape]: name
        }
        nextButton({...data})
    });

    return (
        <form onSubmit = {onSubmit} className = 'Form'>
            <label>
                Enter your Name(default value is the value that you choice X or O)
                <input ref = {register} type="text" name="userName" id="user-name" placeholder = "Enter your Name"/>
            </label>
            <label>
                Do you want to be X or O
                <input ref = {register} type="radio" name="userShape" id="x-user" value = 'X' defaultChecked/>
                <input ref = {register} type="radio" name="userShape" id="o-user" value = "O"/>
            </label>
            <input type="submit" value="Next"/>
            <input type="button" value="back" onClick = {backButton}/>
        </form>
    )
}