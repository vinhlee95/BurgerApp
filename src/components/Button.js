import React from 'react';
import classes from './css/Button.css';

const Button = props => (
   <div 
      className={[classes.button, classes[props.buttonType]].join(' ')}
      onClick={props.onClick}
   >
      {props.children}
   </div>
);

export default Button;