import React, {memo, useCallback} from 'react';
import {FilterType} from '../../App';
import {Button, Stack} from '@mui/material';

type ButtonsForFilteringPropsType = {
    callback: (filter: FilterType) => void
    filter: FilterType
}

export const ButtonsForFiltering = memo(({callback, filter}: ButtonsForFilteringPropsType) => {

        const onClickHandler = useCallback((filter: FilterType) => {
            callback(filter)
        }, [callback])

        return (
            <>
                <Stack spacing={1} direction="row">
                    <Button variant={filter === 'all' ? 'contained' : 'outlined'} size="small"
                            onClick={() => onClickHandler('all')}>All</Button>
                    <Button variant={filter === 'active' ? 'contained' : 'outlined'} size="small"
                            onClick={() => onClickHandler('active')}>Active</Button>
                    <Button variant={filter === 'completed' ? 'contained' : 'outlined'} size="small"
                            onClick={() => onClickHandler('completed')}>Completed</Button>
                </Stack>
            </>

        );
    }
)