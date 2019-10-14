import React from 'react';
import SimpleProduct from './components/SimpleProduct';
import SimpleSum from './components/SimpleSum';
import mongoose from 'mongoose';

import { IAction, ActionType } from './framework/IAction';
import { IWindow } from './framework/IWindow'
import SimpleLogin from './components/SimpleLogin';

declare let window: IWindow;

interface IProps {
  stateCounter: number;
}
export interface IProductData {
  _id: string;
  product_name: string;
  product_value: number;
  product_amount: number;
  product_totalPrice: number;
}

interface IState {
}

export interface IProductAction extends IAction {
  product: IProductData
}

export default class App extends React.PureComponent<IProps, IState> {

  constructor(props: any) {
    console.log("new App component will be initialized");
    super(props);

    this.handleCreateProduct = this.handleCreateProduct.bind(this);
  }

  render() {
    window.CS.log("App --> render()")
    return (
      <div>
        <p> {window.CS.getUIState().counter}</p>
        <h1>simple product management application</h1>
        <SimpleLogin isLoggedIn = {window.CS.getUIState().loggedIn}/>
        <p>to create a new product click this button:&nbsp;
          <button disabled={!window.CS.getUIState().loggedIn} onClick={this.handleCreateProduct}>create product</button>
        </p>
        <table>
          <tbody>
            <tr><th>description</th><th>value</th><th>amount</th><th>total price</th><th>action</th></tr>
            {window.CS.getBMState().products.map(product => <SimpleProduct key={product._id} product={product} edit={false} />)}
            <SimpleSum sumOfAmount= {window.CS.getBMState().sumOfAmount} sumOfTotalPrice= {window.CS.getBMState().sumOfTotalPrice}/>
          </tbody>
        </table>
      </div>
    );
  }

  handleCreateProduct() {
    console.log("handleCreateProduct invoked");
    const newProduct: IProductData = {
      _id: mongoose.Types.ObjectId().toString(),
      product_name: "product",
      product_value: 0,
      product_amount: 1,
      product_totalPrice: 0
    }
    const action: IProductAction = {
      type: ActionType.create_product,
      product: newProduct
    }
    window.CS.clientAction(action);
  }

}
