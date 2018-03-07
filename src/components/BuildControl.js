import React from 'react';
import classes from './css/BuildControl.css';

const BuildControl = props => {
   return( 
      <div className={classes.buildControl}>
         <label className={classes.label}>{props.label}</label>
         <button className={classes.button} 
            onClick={() => {
            props.handleRemoveIngredient(props.type)}}
            disabled={props.disabled}>Less</button>
         <button className={classes.button} onClick={() => { props.handleAddIngredient(props.type) }}>More</button>
      </div>
   );
}

export default BuildControl;