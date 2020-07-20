import React, { Component } from 'react';
import web3 from './web3';
import factory from './factory';
import { Button, Container } from 'semantic-ui-react';
import {NavLink } from "react-router-dom";
import Home from './routerComponents/Home';
import SearchBar from './SearchBar';
import NavBar from './routerComponents/NavBar';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      deployedVehicleAddresses: [],
      regNumbers: ''
    };    
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log('hello',accounts); 

    const deployedVehicleAddresses = await factory.methods.getDeployedVehicles().call();
    this.setState({ deployedVehicleAddresses });

    console.log('list of vehicle item addresses : ', this.state.deployedVehicleAddresses);

  }
  
  render() {
    return (
      <div style={{marginTop: '20px', marginLeft: '50px', marginRight: '50px'}}> 
      
      <NavBar />

        <Container>
          
          <NavLink to= "/create">
              <Button floated= "right"
                      content='Create Vehicle'
                      icon='add circle'
                      primary={true}                     
              />
          </NavLink>
          
          <h2 style={{marginTop: '100px', marginBottom: '50px'}}>Registerd Vehicles</h2>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />



          <Home vehicleAddress = {this.state.deployedVehicleAddresses}/>
          

        </Container>
      </div>
      
    );
  }
  
}

export default App;