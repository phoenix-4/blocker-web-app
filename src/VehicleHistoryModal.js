import React, { PureComponent } from 'react';
import Modal from "react-bootstrap/Modal";

class VehicleHistoryModal extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            ownerships: '',
            chassisNumbers: '',
            engineNumbers: '',
            colours: ''
        }
        
    }

    getval(e){
        var owners = this.props.ownerships
        var engine = this.props.engineNumbers
        var chasis = this.props.chassisNumbers
        var colour = this.props.colours
        console.log("History Modal : ", owners)
        this.setState({
            ownerships : owners,
            chassisNumbers: chasis,
            engineNumbers: engine,
            colours: colour
        },
        () => {
            console.log("History Modal state is : ", this.state.ownerships)
            console.log("History Modal state is : ", this.state.engineNumbers)
            console.log("History Modal state is : ", this.state.chassisNumbers)
            console.log("History Modal state is : ", this.state.colours)
        })
    }

    getval1() {
        var data = [];
        if(this.state.ownerships !== ''){
            for(let i=0; i<15; i++){
                    data.push(this.state.ownerships[i]);
               }
        }
            return (
                data.map((ownershp) => (
                    <h6>{ownershp}</h6>
                )))
        
    }

    getval2() {
        var data = [];
        if(this.state.chassisNumbers !== ''){
            for(let i=0; i<50; i++){
                    data.push(this.state.chassisNumbers[i]);
               }
        }
            return (
                data.map((chassisNumber) => (
                    <h6>{chassisNumber}</h6>
                )))
        
    }

    getval3() {
        var data = [];
        if(this.state.engineNumbers !== ''){
            for(let i=0; i<50; i++){
                    data.push(this.state.engineNumbers[i]);
               }
        }
            return (
                data.map((engineNumber) => (
                    <h6>{engineNumber}</h6>
                )))
        
    }

    getval4() {
        var data = [];
        if(this.state.colours !== ''){
            for(let i=0; i<50; i++){
                    data.push(this.state.colours[i]);
               }
        }
            return (
                data.map((color) => (
                    <h6>{color}</h6>
                )))
        
    }


    render() {

        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose, this.props.refreshPage} size="xl">
                <Modal.Header closeButton>
        <Modal.Title>{this.props.regNo}{" : "} {this.props.vehicleAddress}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <React.Fragment>
                    <form>
                    <header className="App-header" style={{marginLeft: '43%', marginRight: '200px', marginBottom: '40px'}}>
                        <h2>Vehicle History Details</h2>
                    </header>

                    <div>
                        {this.getval()}
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>

                        <h4>Ownership : </h4>
                        <div class="form-group" style={{marginLeft: '250px'}}>
                            {this.getval1()}
                        </div>

                        <h4>Chasis : </h4>
                        <div class="form-group" style={{marginLeft: '250px'}}>
                            {this.getval2()}
                        </div>

                        <h4>Engine : </h4>
                        <div class="form-group" style={{marginLeft: '250px'}}>
                            {this.getval3()}
                        </div>

                        <h4>Colour : </h4>
                        <div class="form-group" style={{marginLeft: '250px'}}>
                            {this.getval4()}
                        </div>
                        
                    </div>

                    </form>
                    
                    <br></br>

                    </React.Fragment>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default VehicleHistoryModal