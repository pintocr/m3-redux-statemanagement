import React from 'react';
import { IAction, ActionType } from '../framework/IAction';

import { IWindow } from '../framework/IWindow';
declare let window: IWindow;

interface IProps {
    isLoggedIn : boolean;
}

interface IState {
    typedUsername: string;
    typedPassword: string;
}

export default class SimpleLogin extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

        this.state = {
            typedUsername: "",
            typedPassword: "",
        }

    }

    render() {
        if(!this.props.isLoggedIn){
            return (
                <div>&nbsp;
                    <p>Please log in: </p>&nbsp;
                    <input type="text" name="name" value ={this.state.typedUsername} onChange={this.updateUser} />&nbsp;
                    <input type="password" name="password" value={this.state.typedPassword} onChange={this.updatePassword} />&nbsp;
                    <button onClick={this.handleLogin} >login</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Don't forget to log out: </p>&nbsp;
                    <button onClick={this.handleLogOut}>log out</button>
                </div>
            )
        }

            
    }


    handleLogin (){
        if(this.state.typedUsername === window.CS.getBMState().user.username && this.state.typedPassword === window.CS.getBMState().user.password){
            const action: IAction = {
                type: ActionType.login
              }
              window.CS.clientAction(action);
        }
       
      }
    
      handleLogOut (){
        const action: IAction = {
          type: ActionType.logout
        }
        window.CS.clientAction(action);
      }

      updateUser (evt: any){
        this.setState({ typedUsername: evt.target.value });
      }

      updatePassword (evt: any){
        this.setState({ typedPassword: evt.target.value });
      }


}