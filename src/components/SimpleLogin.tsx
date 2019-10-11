import React from 'react';

import { IWindow } from '../framework/IWindow';
declare let window: IWindow;

interface IProps {
    handleLogin : Function;
    handleLogOut : Function;
    isLoggedIn : boolean;
}

interface IState {
}

export default class SimpleLogin extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {
        }

    }

    render() {
        if(!this.props.isLoggedIn){
            return (
                <div>&nbsp;
                    <p>Please log in: </p>&nbsp;
                    <input type="text" name="name"  />&nbsp;
                    <input type="password" name="password"  />&nbsp;
                    <button onClick={this.handleLogin} >login</button>
                    <p>{this.props.isLoggedIn}</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button onClick={this.handleLogOut}>log out</button>
                </div>
            )
        }

            
    }


    handleLogin(){
        console.log("ultimate log: ", this.props.isLoggedIn);
        this.props.handleLogin();
    }

    handleLogOut(){
        this.props.handleLogOut();
    }


}