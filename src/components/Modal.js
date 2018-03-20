import React, { Fragment } from 'react';
import BackDrop from './BackDrop';
import classes from './css/Modal.css'

const Modal = props => {
   return(
       <Fragment>
           <BackDrop showModal={props.showModal} handleBackdropClick={props.handleBackdropClick}/>
            <div 
                className={classes.Modal}
                style={{
                    opacity: props.showModal ? 1 : 0,
                    transform: props.showModal ? 'translateY(0)':'translateY(-100vh)'
                }}>{props.children}
            </div>
        </Fragment>
   );
}

export default Modal;