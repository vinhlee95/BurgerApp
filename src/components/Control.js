import React, { Component } from 'react';
import Burger from './Burger';
import BuildControls from './BuildControls';
import Modal from './Modal';
import OrderSummary from './OrderSummary';

const singlePrice = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.8,
  meat: 1.5
};

const noneIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
}

class Control extends Component {
   constructor(props) {
      super(props);
      this.state = {
         ingredients: noneIngredients,
         price: 4, 
         purchasable: false,
         showModal: false,
      }
   }

   handlePurchase = (ingredients) => {
     const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
     })
     .reduce((sum, el) => {
        return sum + el;
     }, 0);
     const updatedPurchase = sum > 0;
     this.setState({purchasable: updatedPurchase});
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
      this.handlePurchase(updatedIngredients);
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
     this.handlePurchase(updatedIngredients);      
   };

   handleReset = () => {
     this.setState({ingredients: noneIngredients});
   }

   renderModal = () => {
      if(this.state.showModal) {
        return (
          <Modal showModal={this.state.showModal} handleBackdropClick={() => this.setState({showModal: false})}>
            <OrderSummary 
              ingredients={this.state.ingredients} 
              price={this.state.price}
              handleCloseModal={() => this.setState({showModal: false})}/>
          </Modal>
        );
      }
      return;
   }

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
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            handleShowModal={() => this.setState({showModal:true})}handleReset={this.handleReset}/>

          {this.renderModal()}
        </div>
      );
   }
}

export default Control;