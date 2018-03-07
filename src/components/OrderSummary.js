import React, { Fragment } from 'react';

const OrderSummary = props => {
   let ingredientList;
   ingredientList = Object.keys(props.ingredients).map(igKey => {
      return <li key={igKey} style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</li>
   });
   return(
      <Fragment>
         <h2>Your Order Summary</h2>
         <p>Your Burger include:</p>
         <ul>
            {ingredientList}
         </ul>
         <h4>Price: {props.price}</h4>
         <button>Check Out</button>
      </Fragment>
   );
}

export default OrderSummary;