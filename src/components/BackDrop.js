import React from 'react';
import classes from './css/BackDrop.css';

const BackDrop = props => (
   props.showModal ? <div className={classes.backDrop} onClick={props.handleBackdropClick}></div> : null
);

export default BackDrop;
