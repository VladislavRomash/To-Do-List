import React from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from '@material-ui/icons/Delete';

type ButtonForDeletePropsType = {
    callback: () => void
}

export const ButtonForDelete = ({callback}: ButtonForDeletePropsType) => {

    const onClickHandler = () => callback()

    return (
        <IconButton aria-label="delete" size="small" onClick={onClickHandler}>
            <DeleteIcon fontSize="small"/>
        </IconButton>
    );
};