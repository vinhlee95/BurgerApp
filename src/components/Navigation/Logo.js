import React from 'react';
import BurgerLogo from '../../images/burger-logo.png';
import classes from './css/Logo.css';

const Logo = props => (
   <div className={classes.layout}>
      <img src={BurgerLogo} alt="burger-logo" className={classes.logo} />
   </div>
);

export default Logo;