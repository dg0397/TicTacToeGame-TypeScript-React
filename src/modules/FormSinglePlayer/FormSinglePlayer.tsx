import React, {FC} from 'react'
import {useForm} from 'react-hook-form';
import { FormProps } from '../FormTwoPlayers/FormTwoPlayers';
import styled from 'styled-components';

type FormData = {
    userShape: "X" | 'O' ;
    userName: string;
};

export const FormComponent = styled.form`
    width:80%;
    margin:0 auto;
    text-align:center;
    height:auto;
`
type LabelComponentProps = {
    type? : 'check' | 'text';
    statusBtn? : "checked" | 'unChecked';
}
export const LabelComponent = styled.label<LabelComponentProps>`
    display:block;
    transition:border .5s ease;
    border-radius : 10px;
`
type InputElementProps = {
    type? :  'radio' | 'text'
}
export const InputElement = styled.input<InputElementProps>`
    ${ props => {
        if(props.type === 'radio'){
            return `
                display : none;
                margin: 0 auto;
                &:checked + span{
                    border: 1px solid rgba(28, 28, 28, .5);
                    background-color:rgba(28, 28, 28, .1);
                }
            `
        }else{
            return`
                display: block;
                margin: .5rem auto;
                height:2rem;
                border:none;
                border:1px solid #1c1c1c;
                border-radius: 10px;
                outline:none;
                padding:.5rem;
            `
        }
    }}
`
const LabelShape = styled.span`
    width:100%;
    display:block;
    padding:.5rem;
    border-radius: 10px;
    &:hover{
        border:1px solid rgba(28, 28, 28, .5);
        background-color:rgba(28, 28, 28, .1);
    }
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
    const {register, handleSubmit} = useForm<FormData>(); 

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
                <InputElement ref = {register} type="text" name="userName" id="user-name" placeholder = "Enter your Name"/>
            </LabelComponent>
            <p>Do you want to be X or O</p>
            <ChecksContainer>
            <LabelComponent type = 'check' >
                <InputElement ref = {register} type="radio" name="userShape" id="x-user" value = 'X' defaultChecked/>
                <LabelShape>X</LabelShape>
            </LabelComponent>
            <LabelComponent type = 'check'>
                <InputElement ref = {register} type="radio" name="userShape" id="o-user" value = "O"/>
                <LabelShape>O</LabelShape>
            </LabelComponent>
            </ChecksContainer>
            <ButtonsContainer>
                <DirectionButton type="button" value="Back" onClick = {backButton}/>
                <DirectionButton type="submit" value="Next"/>
            </ButtonsContainer>
        </FormComponent>
    )
}