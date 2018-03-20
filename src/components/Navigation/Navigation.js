import React from 'react';
import classes from './css/Navigation.css';

const Navigation = props => (
   <nav className={classes.nav}>
      <ul>
         <li>Builder</li>
         <li>Checkout</li>
      </ul>
   </nav>
);

export default Navigation;