import React, { Fragment } from 'react';
import classes from './css/Layout.css';
import ToolBar from './Navigation/ToolBar';

const Layout = props => (
   <Fragment>
      <ToolBar />
      <div className={classes.content}>{ props.children }</div>
   </Fragment>
);

export default Layout;