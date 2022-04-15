import React, {ChangeEvent, useState} from 'react';


type UniversalInputPropsType = {
    callback: (title: string) => void
}

export const UniversalInput = ({callback}: UniversalInputPropsType) => {

    const [value, setValue] = useState<string>('')

    const onClickHandler = () => {
        if (value.trim() !== '') {
            callback(value)
            setValue('')
        } else {
            setValue('Error')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};