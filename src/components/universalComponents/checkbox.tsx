import React, {ChangeEvent} from 'react';

type CheckboxPropsType = {
    changeStatusCheckbox: (value: boolean) => void
    initialValue: boolean
}

export const Checkbox = ({changeStatusCheckbox, initialValue}: CheckboxPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatusCheckbox(e.currentTarget.checked)
    }

    return (
        <span>
            <input type="checkbox" checked={initialValue} onChange={onChangeHandler}/>
        </span>
    );
};