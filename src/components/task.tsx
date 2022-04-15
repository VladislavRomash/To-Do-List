import React from 'react';


export const Task = () => {
    return (
        <ul>
            <li><input type="checkbox" checked={true}/> <span>React</span></li>
            <li><input type="checkbox" checked={false}/> <span>HTML</span></li>
            <li><input type="checkbox" checked={true}/> <span>JS</span></li>
        </ul>

    );
};