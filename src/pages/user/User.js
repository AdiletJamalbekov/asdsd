import React from 'react';
import classes from './User.module.css';

const User = ({name, age}) => {

    return (
        <div>
            <p className={classes.user}>{name}</p>
            <p className={classes.age}>{age}</p>
        </div>
    );
};

export default User;