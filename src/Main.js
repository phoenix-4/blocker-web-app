import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import NavBar from './routerComponents/NavBar';
import Home from './routerComponents/Home';
import NewVehicle from './newVehicle';
import LoginForm from './Login';
import {ProtectedRoute} from './protectedRoute';


export default class Main extends Component {

 
    render() {
        var abc ='';
        return (
            
            <div>

                <div>
                    <Switch>
                        <Route exact path="/" component={LoginForm}></Route>
                        <ProtectedRoute path="/create" component={NewVehicle}/>
                        <ProtectedRoute path="/home" component={App}/>
                    </Switch>
                </div>  
                
            </div>
        );
    }
}