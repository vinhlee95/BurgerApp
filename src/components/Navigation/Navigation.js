import React from 'react';
import classes from './css/Navigation.css';

const Navigation = props => (
   <ul className={classes.navLink}>
      <a href="/" className={classes.active} ><li>Builder</li></a>
      <a href="/"><li>Checkout</li></a>
   </ul>
);

export default Navigation;