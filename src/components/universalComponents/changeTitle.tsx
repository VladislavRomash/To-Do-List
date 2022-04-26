import React, {ChangeEvent, memo, useCallback, useState} from 'react';

type HeaderPropsType = {
    callback: (value: string) => void
    title: string
}

export const ChangeTitle = memo(({callback, title}: HeaderPropsType) => {

        const [active, setActive] = useState<boolean>(true)
        const [value, setValue] = useState<string>(title)

        const onDoubleClickHandler = () => {
            setActive(false)
            changeTitle()
        }
        const onBlurHandler = () => {
            setActive(true)
            changeTitle()
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }
        const changeTitle = useCallback(() => {
            callback(value)
        }, [callback, value])

        return (
            <>
                {
                    active ?
                        <span onDoubleClick={onDoubleClickHandler}>{title}</span>
                        : <input value={value}
                                 onBlur={onBlurHandler}
                                 onChange={onChangeHandler}
                                 autoFocus={true}
                        />
                }
            </>
        );
    }
)