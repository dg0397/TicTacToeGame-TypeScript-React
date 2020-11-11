import React from 'react'
import {useForm} from 'react-hook-form';



export const FormTwoPlayers = () => {
    const {register, handleSubnmit, errors} = useForm()

    const onSubmit = () => {
        
    }

    return (
        <form onSubmit = {handleSubnmit(onSubmit)} className = 'Form'>
            <label>
                Enter your Name(default value is the value that you choice X or O)
                <input type="text" name="x-user" id="x-user" placeholder = "Enter your Name"/>
            </label>
            <label>
                Do you want to be X or O
                <input type="checkbox" name="x-user" id="x-user" placeholder = "Enter your Name"/>
                <input type="checkbox" name="x-user" id="x-user" placeholder = "Enter your Name"/>
            </label>
            <button>Next</button>
            <button>Back</button>
        </form>
    )
}