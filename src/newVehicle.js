import React, { Component } from 'react';
import { Form, Button} from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import factory from './factory';
import web3 from './web3';
import NavBar from './routerComponents/NavBar';

class NewVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehhicleId:'',
            loading: false 
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Id", this.state.vehhicleId)
        
        
        await factory.methods
        .createVehicle(this.state.vehhicleId).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading : false});
    }


    render() {
        return (
            <div>
                <NavBar />
            <div style={{marginTop: '100px', marginLeft: '100px', marginRight: '100px'}}>
                
                <h3 style={{marginLeft: '500px'}}>Create New Vehicle</h3>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

                <Form onSubmit={this.onSubmit} style={{width: '400px', marginLeft: '500px'}}>
                    <Form.Field>
                        
                        <label>Vehicle Id:</label>
                        <input 
                            placeholder='Enter Vehicle Registration Number Here' 
                            value={this.state.vehhicleId}
                            onChange={event => this.setState({vehhicleId: event.target.value})}
                        />
                    </Form.Field>
                    <Button loading  = {this.state.loading} type='submit'>Submit</Button>
                </Form>
                <br></br><br></br><br></br>

                <p style={{marginLeft: '600px', marginTop: '370px'}}>BLOCKER &copy; 2020</p>

                <br></br>


            </div>
            </div>
        )
    }
}

export default NewVehicle;