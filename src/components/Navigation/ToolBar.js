import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import classes from './css/ToolBar.css';

const ToolBar = props => (
   <header className={classes.nav}>
      <div>MENU</div>
      <Logo />
      <Navigation />
   </header>
);

export default ToolBar;

