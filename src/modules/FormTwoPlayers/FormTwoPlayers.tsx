import React, {FC} from 'react'
import {useForm} from 'react-hook-form';

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
        <form onSubmit = {onSubmit} className = 'Form'>
            <label>
                Who want to be X(default value is X)
                <input ref = {register} type="text" name="xUserName" id="xUserName" placeholder = "Enter your Name" defaultValue = 'X' />
            </label>
            <label>
                Who want to be O(default value is O)
                <input ref = {register} type="text" name="oUserName" id="oUserName" placeholder = "Enter your Name" defaultValue = 'O' />
            </label>
            <input type="button" value="Back" onClick = {backButton}/>
            <input type="submit" value="Next"/>
        </form>
    )
}
