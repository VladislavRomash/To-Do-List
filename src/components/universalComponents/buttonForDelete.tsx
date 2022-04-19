import React from 'react';

type ButtonForDeletePropsType = {
    callback: () => void
}

export const ButtonForDelete = ({callback}: ButtonForDeletePropsType) => {

    const onClickHandler = () => callback()

    return (
        <span style={{paddingLeft: '10px'}}>
            <button onClick={onClickHandler}>Delete</button>
        </span>
    );
};