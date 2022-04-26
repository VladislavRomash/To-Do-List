import React, {ChangeEvent, memo, useCallback} from 'react';
import Checkbox from '@mui/material/Checkbox';

type CheckboxPropsType = {
    changeStatusCheckbox: (value: boolean) => void
    initialValue: boolean
}

export const CheckBox = memo(({changeStatusCheckbox, initialValue}: CheckboxPropsType) => {

        const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            changeStatusCheckbox(e.currentTarget.checked)
        }, [changeStatusCheckbox])

        return (
            <span>
            <Checkbox size="small" checked={initialValue} onChange={onChangeHandler}/>
        </span>
        );
    }
)