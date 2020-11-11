import React from 'react'
import {useForm} from 'react-hook-form';



export const FormTwoPlayers = () => {
    const {register, handleSubnmit, errors} = useForm()

    const onSubmit = () => {
        
    }

    return (
        <form onSubmit = {handleSubnmit(onSubmit)} className = 'Form'>
            <label>
                Who want to be X(default value is X)
                <input type="text" name="x-user" id="x-user" placeholder = "Enter your Name"/>
            </label>
            <label>
                Who want to be O(default value is O)
                <input type="text" name="o-user" id="o-user" placeholder = "Enter your Name"/>
            </label>
            <button>Next</button>
            <button>Back</button>
        </form>
    )
}
