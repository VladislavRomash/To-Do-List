import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = ({title}: HeaderPropsType) => {
    return (
        <h3>{title}</h3>
    );
};