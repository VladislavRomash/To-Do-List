import React, {ChangeEvent, KeyboardEvent, memo, useCallback, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {AddBox} from '@material-ui/icons';


type UniversalInputPropsType = {
    callback: (title: string) => void
}

export const UniversalInput = memo(({callback}: UniversalInputPropsType) => {

        const [value, setValue] = useState<string>('')
        const [error, setError] = useState<boolean>(false)

        const onClickHandler = useCallback(() => {
            if (value.trim() !== '') {
                callback(value.trim())
                setValue('')
            } else {
                setError(true)
            }
        }, [callback, value])
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
                <TextField value={value}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           error={error}
                           id="outlined-basic"
                           label="Input your task"
                           variant="outlined"
                           helperText={error && 'Title is required'}
                           size={'small'}
                />
                <Button onClick={onClickHandler}
                        variant="outlined"
                        style={{height: '40px', border: 'none'}}
                >
                    <AddBox/>
                </Button>
            </div>
        );
    }
)