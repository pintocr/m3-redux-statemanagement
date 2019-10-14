import { initial, IState } from '../state/appState'
import { IWindow } from '../framework/IWindow'
import { IAction, ActionType } from '../framework/IAction'
import { IProductData, IProductAction } from '../App';

//import { parse } from 'querystring';

declare let window: IWindow;


export const reducer = (state = initial, action: IAction) => {
    window.CS.log("2. ACTION:" + action.type);
    let newState: IState = state;
    newState = JSON.parse(JSON.stringify(state)) as IState;
    newState.UI.counter = state.UI.counter + 1;
    switch (action.type) {
        case ActionType.INIT:
            return newState;

        case ActionType.create_product:
            const createAction = action as IProductAction
            newState.BM.sumOfAmount = newState.BM.sumOfAmount + createAction.product.product_amount;
            newState.BM.sumOfTotalPrice = newState.BM.sumOfTotalPrice + createAction.product.product_totalPrice;
            newState.BM.products.push(createAction.product);
            return newState;

        case ActionType.update_product:
            let updateAction = action as IProductAction;
            let productToChange: IProductData[] = newState.BM.products.filter(product => product._id === updateAction.product._id)
            console.log(productToChange);
            productToChange[0].product_name = updateAction.product.product_name;
            productToChange[0].product_value = updateAction.product.product_value;
            productToChange[0].product_amount = updateAction.product.product_amount;
            productToChange[0].product_totalPrice = updateAction.product.product_totalPrice;
            let amountSum :number = 0;
            let totalPriceSum : number = 0;
            newState.BM.products.forEach(element => {
                amountSum = amountSum + element.product_amount;
                totalPriceSum = totalPriceSum + element.product_totalPrice;
            })
            newState.BM.sumOfAmount = amountSum;
            newState.BM.sumOfTotalPrice = totalPriceSum;  
            return newState;

        case ActionType.delete_product:
            console.log("Delete Action");
            let deleteAction = action as IProductAction;
            let productsToKeep: IProductData[] = newState.BM.products.filter(product => product._id !== deleteAction.product._id)
            newState.BM.products = productsToKeep;
            newState.BM.sumOfAmount = newState.BM.sumOfAmount - deleteAction.product.product_amount;
            newState.BM.sumOfTotalPrice = newState.BM.sumOfTotalPrice - deleteAction.product.product_totalPrice;
            return  newState;

        case ActionType.login: 
            newState.UI.loggedIn = true;
            return newState;

        case ActionType.logout: 
            newState.UI.loggedIn = false;
            return newState;

        default:
            window.CS.log("1. Error!!!!! no reducer defined");
            return newState;
    }
}

