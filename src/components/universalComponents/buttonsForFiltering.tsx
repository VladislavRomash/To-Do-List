import React from 'react';
import {FilterType} from "../../App";

type ButtonsForFilteringPropsType = {
    callback: (filter: FilterType) => void
}

export const ButtonsForFiltering = ({callback}: ButtonsForFilteringPropsType) => {

    const onClickHandler = (filter: FilterType) => {
        callback(filter)
    }

    return (
        <>
            <button onClick={() => onClickHandler('all')}> All</button>
            <button onClick={() => onClickHandler('active')}>Active</button>
            <button onClick={() => onClickHandler('completed')}>Completed</button>
        </>

    );
};