import React, {FC} from 'react'
import {useForm} from 'react-hook-form';
import { FormProps } from '../FormTwoPlayers/FormTwoPlayers';
import styled from 'styled-components';

type FormData = {
    userShape: "X" | 'O' ;
    userName: string;
};

export const FormComponent = styled.form`
    width:auto;
    height:auto;
`
type LabelComponentProps = {
    type? : 'check' | 'text'
}
export const LabelComponent = styled.label<LabelComponentProps>`
    display:block;
    border: ${(props) => props.type === "check" ? "1px solid rgba(28, 28, 28, .5)" : "none" };
    padding: ${(props) => props.type === "check" ? ".5rem" : "none" };
    border-radius : 10px;
`
export const DirectionButton = styled.input`
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
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin: 1rem auto;
`
const ChecksContainer = styled.div`
    display:flex;
    justify-content:space-around;
    margin:.5rem auto;
`


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
        <FormComponent onSubmit = {onSubmit} className = 'Form'>
            <LabelComponent type = 'text'>
                Enter your Name(default value is the value that you choice X or O)
                <input ref = {register} type="text" name="userName" id="user-name" placeholder = "Enter your Name"/>
            </LabelComponent>
            <p>Do you want to be X or O</p>
            <ChecksContainer>
            <LabelComponent type = 'check'>
                <input ref = {register} type="radio" name="userShape" id="x-user" value = 'X' defaultChecked/>
                X
            </LabelComponent>
            <LabelComponent type = 'check' >
                <input ref = {register} type="radio" name="userShape" id="o-user" value = "O"/>
                O
            </LabelComponent>
            </ChecksContainer>
            <ButtonsContainer>
                <DirectionButton type="button" value="Back" onClick = {backButton}/>
                <DirectionButton type="submit" value="Next"/>
            </ButtonsContainer>
        </FormComponent>
    )
}