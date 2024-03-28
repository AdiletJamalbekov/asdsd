import React from 'react';
import classes from './Input.module.css';

const Input = ({type="password", placeholder='password', onChange}) => {
    return (
        <input
            className={classes.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;