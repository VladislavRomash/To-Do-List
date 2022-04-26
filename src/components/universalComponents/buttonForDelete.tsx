import React, {memo, useCallback} from 'react';
import {IconButton} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';

type ButtonForDeletePropsType = {
    callback: () => void
}

export const ButtonForDelete = memo(({callback}: ButtonForDeletePropsType) => {

        const onClickHandler = useCallback(() => callback(), [callback])

        return (
            <IconButton onClick={onClickHandler}
                        aria-label="delete"
                        size="small"
            >
                <DeleteIcon fontSize="small"/>
            </IconButton>
        );
    }
)