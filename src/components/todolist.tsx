import React from 'react';
import {Header} from "./header";
import {UniversalInput} from "./universalInput";
import {Task} from "./task";
import {ButtonsForFiltering} from "./buttonsForFiltering";


export const Todolist = () => {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <UniversalInput/>
            </div>
            <div>
               <Task/>
            </div>
            <div>
                <ButtonsForFiltering/>
            </div>
        </div>
    );
};