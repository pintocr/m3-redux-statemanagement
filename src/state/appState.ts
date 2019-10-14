import { string } from "prop-types";

export interface IUI{
    counter: number;
    loggedIn: boolean;
    waitingForResponse:boolean;
}

interface IProductData {
    _id: string;
    product_name: string;
    product_value: number;
    product_amount: number;
    product_totalPrice: number;
  }

  interface IUser {
      username: string;
      password: string;
  }


export interface IBM{
    products:IProductData[];
    sumOfAmount: number,
    sumOfTotalPrice: number,
    isloggedIn : boolean,
    user: IUser
}


export interface IState{
    UI:IUI;
    BM:IBM;
}

// initial state 
export const initial:IState = {
	UI: {
		counter: 0,
		loggedIn: false,
        waitingForResponse: false
	},
	BM: {
        products:[],
        sumOfAmount: 0,
        sumOfTotalPrice: 0,
        isloggedIn : false,
        user: {
            username: "admin",
            password: "admin"
        }
	}
};
