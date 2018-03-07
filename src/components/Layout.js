import React, { Fragment } from 'react';
import classes from './css/Layout.css';

const Layout = props => (
   <Fragment>
      <div className={classes.content}>{ props.children }</div>
   </Fragment>
);

export default Layout;