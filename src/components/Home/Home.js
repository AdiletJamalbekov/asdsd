import React from 'react';
import classes from './Home.module.css';


const Home = ({index}) => {
    return (
        <div>
            <br/>
            <button className={classes.btn}>
                {index}
            </button>
        </div>
    );
};

export default Home;