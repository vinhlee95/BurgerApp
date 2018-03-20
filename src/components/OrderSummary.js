import React, { Fragment } from 'react';
import Button from './Button';

const OrderSummary = props => {
   let ingredientList;
   ingredientList = Object.keys(props.ingredients).map(igKey => {
      return (
            <li 
               key={igKey} 
               style={{
                  textTransform: 'capitalize',
                  }}>
               {igKey}: {props.ingredients[igKey]}
            </li>
         )
   });
   return(
      <Fragment>
         <h2>Your Order Summary</h2>
         <p>Your Burger include:</p>
         <ul style={{paddingLeft: 'none'}}>
            {ingredientList}
         </ul>
         <h4>Price: {props.price.toFixed(2)}</h4>
         <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
         }}>
            <Button buttonType="confirm">Check Out</Button>
                     <Button buttonType="cancel" onClick={props.handleCloseModal}>Cancel</Button>
         </div>
      </Fragment>
   );
}

export default OrderSummary;