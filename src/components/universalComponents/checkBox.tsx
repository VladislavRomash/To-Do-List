import React, {ChangeEvent} from 'react';
import Checkbox from '@mui/material/Checkbox';

type CheckboxPropsType = {
    changeStatusCheckbox: (value: boolean) => void
    initialValue: boolean
}

export const CheckBox = ({changeStatusCheckbox, initialValue}: CheckboxPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatusCheckbox(e.currentTarget.checked)
    }

    return (
        <span>
            <Checkbox size="small" checked={initialValue} onChange={onChangeHandler}/>
        </span>
    );
};