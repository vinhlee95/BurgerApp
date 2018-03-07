import React from 'react';
import classes from './css/Burger.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = props => {
    // change ingredients object to array & map thru
    let renderBurger = Object.keys(props.ingredients).map(igKey => { // ['salad', 'bacon', 'cheese']
      return [...Array(props.ingredients[igKey])].map((_, i) => {      
        // Array() return a new array with length = argument
        // Then map thru the new array to push BurgerIngredient to it 
        return <BurgerIngredient key={igKey+i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    // Conditinally render ingredients
    if(renderBurger.length === 0) {
      renderBurger = <p className={classes.addMore}>Please add more ingredients</p>;
    }
    
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {renderBurger}
        <BurgerIngredient type="bread-bottom" />
        <h2>Price: {props.price}</h2>        
      </div>
    );
};

export default Burger;