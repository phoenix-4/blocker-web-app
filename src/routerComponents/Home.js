import React, { Component } from 'react';
import './home.css';
import VehicleItem from '../VehicleItem';
import { Container } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import VehicleItem2 from '../VehicleItem2';

export default class Home extends Component {
    state = {
        regNumbers: '',
        regAddress: '',
        filteredRegNumbers: ''
      }

    getRegNumbers =(value) => {
      this.setState({
        regNumbers: [...this.state.regNumbers, value],
        regAddress: this.props.vehicleAddress
      })
    }
    

    search() {
      if (this.state.filteredRegNumbers == '') {
        return (
          this.props.vehicleAddress.map((vehicleAddress) => (
              
            <VehicleItem vehicleAddress = {vehicleAddress} getRegNumbers= {this.getRegNumbers}/>
          ))
          )
        
      }
      else if (this.state.filteredRegNumbers == undefined ) {
        this.refreshPage();
      }
      else{
        let arrayFiltered = []
        arrayFiltered = this.state.filteredRegNumbers;
        console.log("array Filtered : ", arrayFiltered)
        

        let arrayRegistered = []
        arrayRegistered = this.state.regNumbers;
        console.log("array Registered : ", arrayRegistered)

        let arrayAddress = []
        arrayAddress = this.state.regAddress;
        console.log("array Address : ", arrayAddress)

        let arrayNewAddress = []

        for(var regFilNo=0; regFilNo< arrayFiltered.length; regFilNo++){
          for(var regNo=0; regNo< arrayRegistered.length; regNo++){
            if (arrayRegistered[regNo] == arrayFiltered[regFilNo]) {
              let index = arrayRegistered.indexOf(arrayRegistered[regNo]);

              let addressX = arrayAddress[index];
              
              arrayNewAddress.push(addressX);

              console.log("filterred addresses : ", arrayNewAddress)             
            }
          } 
        }

          return (
            arrayNewAddress.map((vehicleAddress) => (
              <div>
                <VehicleItem2 vehicleAddress={vehicleAddress}/>
              </div>
                
            ))
          )

        
      }  
    }

    refreshPage= () => {
      window.location.reload(false);
  }

    searchedValues = (values) => {
      this.setState({
        filteredRegNumbers: values
      }, () => {
        this.search()
      }
      )
  }
    

    render() {
      
        return (

          <Container>

            <SearchBar vehId={this.state.regNumbers} searchedValues={this.searchedValues}/>
            
            <div className = "ggg">
                {this.search()}
            </div>

          </Container>

        )
    }
}
