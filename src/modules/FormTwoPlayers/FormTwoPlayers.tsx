import React, {FC} from 'react'
import {useForm} from 'react-hook-form';
import { ButtonsContainer, DirectionButton, FormComponent, InputElement, LabelComponent } from '../FormSinglePlayer/FormSinglePlayer';

type FormData = {
    xUserName: string;
    oUserName: string;
};

export type FormProps = {
    backButton():void;
    nextButton(data: any):void
}


export const FormTwoPlayers:FC<FormProps> = ({backButton,nextButton}) => {
    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = handleSubmit(({xUserName,oUserName}) => {
        const data = {
            xUser: xUserName,
            oUser: oUserName
        }
        nextButton({...data})
    });

    return (
        <FormComponent onSubmit = {onSubmit} className = 'Form'>
            <LabelComponent>
                Who want to be X(default value is X)
                <InputElement ref = {register} type="text" name="xUserName" id="xUserName" placeholder = "Enter your Name" defaultValue = 'X' />
            </LabelComponent>
            <LabelComponent>
                Who want to be O(default value is O)
                <InputElement ref = {register} type="text" name="oUserName" id="oUserName" placeholder = "Enter your Name" defaultValue = 'O' />
            </LabelComponent>
            <ButtonsContainer>
                <DirectionButton type="button" value="Back" onClick = {backButton}/>
                <DirectionButton type="submit" value="Next"/>
            </ButtonsContainer>
        </FormComponent>
    )
}
