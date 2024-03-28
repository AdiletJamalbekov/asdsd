import React from 'react';
import Button from "../button/Button";
import classes from './Buttons.module.css';

const Buttons = ({title}) => {
    return (
        <div className={classes.buttons}>
            <Button title={'Edit'}></Button>
            <Button title={'Save'}></Button>
            <Button title={'Delete'}></Button>
        </div>
    );
};

export default Buttons;