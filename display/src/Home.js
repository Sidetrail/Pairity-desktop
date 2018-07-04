import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Folders from './Folders';
import AccountSettings from './AccountSettings';
import Settings from './Settings';
import Devices from './Devices';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Folders} />
                <Route path="/Devices" component={Devices} />
                <Route path="/Account" component={AccountSettings} />
                <Route path="/Settings" component={Settings} />
            </Switch>
            <Link to="/">Folders</Link>
            <Link to="/Devices">Devices</Link>
            <Link to="/Account">Account</Link>
            <Link to="/Settings">Settings</Link>
            <Link to="/login">login</Link>
        </div>);
    }
}

export default Home;
