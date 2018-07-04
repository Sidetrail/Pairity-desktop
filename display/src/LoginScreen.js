import React, { Component } from 'react';

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render(){

        return(
        <div>
            <input type="text" />
            <input type="password" />
        </div>);
    }
}

export default LoginScreen;
