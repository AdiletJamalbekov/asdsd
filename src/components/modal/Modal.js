import React from 'react';
import Input from "../input/Input";
import classes from './Modal.module.css';
import Button from "../button/Button";

const Modal = ({children, handleShow, onChangeInputTask, handleAdd}) => {
    return (
        <>
         <div className={classes.modalWrapper}></div>
         <div className={classes.modalContent}>
             {children} <br/>
             <Input
                placeholder={'Enter name task:'}
                type={'text'}
                onChange={onChangeInputTask}
             /> <br/>
             <Button title={'Add'} action={handleAdd}/> <br/><br/>
             <Button title={'Closed'} action={handleShow}/>
         </div>
        </>
    );
};

export default Modal;