import React from 'react';
import s from './module_css/buttonForDelete.module.css'

type ButtonForDeletePropsType = {
    callback: () => void
}

export const ButtonForDelete = ({callback}: ButtonForDeletePropsType) => {

    const onClickHandler = () => callback()

    return (
        <span className={s.button}>
            <button onClick={onClickHandler}>Delete</button>
        </span>
    );
};