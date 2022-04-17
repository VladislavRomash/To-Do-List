import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = ({title}: HeaderPropsType) => {
    return (
        <strong>{title}</strong>
    );
};