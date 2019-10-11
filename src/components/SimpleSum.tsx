import React from 'react';
import { IProductData, IProductAction } from '../App';
import { ActionType, IAction } from '../framework/IAction';

import { IWindow } from '../framework/IWindow';
declare let window: IWindow;

interface IProps {
    sumOfAmount: number;
    sumOfTotalPrice: number;
}

interface IState {
}

export default class SimpleSum extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);


        this.state = {
        }

    }

    render() {

            return (
            <tr><td>Sum of all Products</td><td></td><td>sum of amount: {this.props.sumOfAmount}</td><td>sum of total price: {this.props.sumOfTotalPrice}</td><td></td></tr>
            )
    }


}