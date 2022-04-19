import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './module_css/universalInput.module.css'
import {Button} from "@mui/material";
import SendIcon from '@material-ui/icons/Send';


type UniversalInputPropsType = {
    callback: (title: string) => void
}

export const UniversalInput = ({callback}: UniversalInputPropsType) => {

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        if (value.trim() !== '') {
            callback(value.trim())
            setValue('')
        } else {
            setError(true)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? s.errorInput : ''}
            />
            <Button variant="outlined" endIcon={<SendIcon/>} size={'small'} onClick={onClickHandler}>Add</Button>
            <div className={error ? s.errorMessage : ''}>
                {error && "Title is required"}
            </div>

        </div>
    );
};