import React from 'react';
import classes from './Example.module.css';

const Example = ({children}) => {
    return (
        <div className={classes.child}>
            {children}
        </div>
    );
};

export default Example;