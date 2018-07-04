import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
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
            <Link to="/login">home</Link>
        </div>);
    }
}

export default Home;
