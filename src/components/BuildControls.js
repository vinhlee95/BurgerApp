import React from 'react';
import BuildControl from './BuildControl';
import classes from './css/BuildControls.css';

const BuildControls = props => {

   const ingredients = [
      {label: 'salad', type: 'salad'},
      {label: 'meat', type: 'meat'},
      {label: 'bacon', type: 'bacon'},
      {label: 'cheese', type: 'cheese'}
   ];
   return(
      <div className={classes.buildControls}>
         {ingredients.map(ingredient => {
            return (
               <BuildControl 
                  label={ingredient.label} 
                  type={ingredient.type} 
                  key={ingredient.type}
                  handleAddIngredient={props.handleAddIngredient}
                  handleRemoveIngredient={props.handleRemoveIngredient}
                  disabled={props.disabled[ingredient.type]}/>
            );
         })}
         <button 
            className={classes.orderButton}
            disabled={!props.purchasable}
            onClick={props.handleShowModal}>Order Now</button>
      </div>
   );
}

export default BuildControls;