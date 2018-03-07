import React, { Component } from 'react';
import Burger from './Burger';
import BuildControls from './BuildControls';

const singlePrice = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.8,
  meat: 1.5
};

class Control extends Component {
   constructor(props) {
      super(props);
      this.state = {
         ingredients: {
           salad: 0,
           bacon: 0,
           cheese: 0,
           meat: 0
         },
         price: 4
      }
   }

   handleAddIngredient = type => {
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount + 1;
      const updatedIngredients = {
        ...this.state.ingredients
      }
      updatedIngredients[type] = newCount;
      const additionalPrice = singlePrice[type];
      const addedPrice = this.state.price + additionalPrice;      
      this.setState({
        ingredients: updatedIngredients,
        price: addedPrice
      });
   }

   handleRemoveIngredient = type => {
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      }
      updatedIngredients[type] = newCount;
      const minorPrice = singlePrice[type];
      const removedPrice = this.state.price - minorPrice;
      this.setState({
          ingredients: updatedIngredients,
          price: removedPrice
      });
   };

   render() {
      const disabledInfo = {...this.state.ingredients};
      for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      return (
         <div>
          <Burger ingredients={this.state.ingredients} price={this.state.price}/>
          <h1>What do you want to add?</h1>
          <BuildControls 
            handleAddIngredient={this.handleAddIngredient}
            handleRemoveIngredient={this.handleRemoveIngredient}
            disabled={disabledInfo}/>
        </div>
      );
   }
}

export default Control;