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
        const computerShape = shape === 'xUser' ? "oUser" : 'xUser'; 
        const name = userName ? userName : userShape;
        const data = {
            [shape]: name,
            [computerShape] : 'Computer'
        }
        nextButton({...data})
    });

    return (
        <form onSubmit = {onSubmit} className = 'Form'>
            <label>
                Enter your Name(default value is the value that you choice X or O)
                <input ref = {register} type="text" name="userName" id="user-name" placeholder = "Enter your Name"/>
            </label>
            <p>Do you want to be X or O</p>
            <label>
                X
                <input ref = {register} type="radio" name="userShape" id="x-user" value = 'X' defaultChecked/>
            </label>
            <label>
                O
                <input ref = {register} type="radio" name="userShape" id="o-user" value = "O"/>
            </label>
            <input type="button" value="Back" onClick = {backButton}/>
            <input type="submit" value="Next"/>
        </form>
    )
}