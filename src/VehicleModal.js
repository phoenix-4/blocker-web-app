import React, { PureComponent } from 'react';
import Modal from "react-bootstrap/Modal";

class VehicleModal extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            owner: '', 
            rAddress: '', 
            nic: '', 
            engine: '', 
            province: '', 
            chasis: '', 
            colour: '',
            date:'',
            telephone: '',
            email: '',
            loading: false
            
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value,
          }, () => {
            console.log("new values adding... ", this.state)
          }
          );
      };

      render() {
        const { owner, rAddress, nic, date, province, condition, capacity, vClass, vType, make, seats, model, status, country, wheelbase, overHang, body, yearOfManufacture, tyreSize, weight, length, width, height, engine, chasis, colour} = this.props

        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose, this.props.refreshPage} size="xl">
                <Modal.Header closeButton>
        <Modal.Title>{this.props.regNo}{" : "} {this.props.vehicleAddress}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <React.Fragment>
                    <form>
                    <header className="App-header" style={{marginLeft: '43%', marginRight: '200px', marginBottom: '40px'}}>
                        <h1>Vehicle Details</h1>
                    </header>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px'}}>
                        <h3>Ownership Details: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Name:</label>
                    <input  type="text" class="form-control" id="usr" name="owner" onChange={this.handleChange} defaultValue={owner || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Address:</label>
                    <input type="text" class="form-control" id="pwd" name="rAddress" onChange={this.handleChange} defaultValue={rAddress || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">NIC:</label>
                    <input type="text" class="form-control" id="usr" name="nic" onChange={this.handleChange} defaultValue={nic || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Date:</label>
                    <input type="text" class="form-control" id="pwd" name="date" onChange={this.handleChange} defaultValue={date || ""} disabled/>
                    </div>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 01: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Engine No:</label>
                    <input type="text" class="form-control" id="pwd" name="engine" onChange={this.props.handleChange} defaultValue={engine || ""} disabled/>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Chasis No:</label>
                    <input type="text" class="form-control" id="pwd" name="chasis" onChange={this.props.handleChange} defaultValue={chasis || ""} disabled/>
                    </div>  

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Colour:</label>
                    <input type="text" class="form-control" id="pwd" name="colour" onChange={this.props.handleChange} defaultValue={colour || ""} disabled/>
                    </div>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 02: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Registered Province:</label>
                    <input  type="text" class="form-control" id="usr" name="province" onChange={this.props.handleChange} defaultValue={province || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Vehicle Condition:</label>
                    <input type="text" class="form-control" id="pwd" name="condition" onChange={this.props.handleChange} defaultValue={condition || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Cylinder Capacity:</label>
                    <input type="text" class="form-control" id="usr" name="capacity" onChange={this.props.handleChange} defaultValue={capacity || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Vehicle Class:</label>
                    <input type="text" class="form-control" id="pwd" name="vClass" onChange={this.props.handleChange} defaultValue={vClass || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Fuel Type:</label>
                    <input  type="text" class="form-control" id="usr" name="vType" onChange={this.props.handleChange} defaultValue={vType || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Number of Seats:</label>
                    <input type="text" class="form-control" id="pwd" name="seats" onChange={this.props.handleChange} defaultValue={seats || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Make:</label>
                    <input type="text" class="form-control" id="usr" name="make" onChange={this.props.handleChange} defaultValue={make || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Model:</label>
                    <input type="text" class="form-control" id="pwd" name="model" onChange={this.props.handleChange} defaultValue={model || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Status:</label>
                    <input type="text" class="form-control" id="pwd" name="status" onChange={this.props.handleChange} defaultValue={status || ""} disabled/>
                    </div>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 03: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Country Origin:</label>
                    <input  type="text" class="form-control" id="usr" name="country" onChange={this.props.handleChange} defaultValue={country || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Wheelbase:</label>
                    <input type="text" class="form-control" id="pwd" name="wheelbase" onChange={this.props.handleChange} defaultValue={wheelbase || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Over Hang:</label>
                    <input type="text" class="form-control" id="usr" name="overHang" onChange={this.props.handleChange} defaultValue={overHang || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Type of Body:</label>
                    <input type="text" class="form-control" id="pwd" name="body" onChange={this.props.handleChange} defaultValue={body || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Year of Manufacture:</label>
                    <input  type="text" class="form-control" id="usr" name="yearOfManufacture" onChange={this.props.handleChange} defaultValue={yearOfManufacture || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Tyre Size:</label>
                    <input type="text" class="form-control" id="pwd" name="tyreSize" onChange={this.props.handleChange} defaultValue={tyreSize || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Weight:</label>
                    <input type="text" class="form-control" id="usr" name="weight" onChange={this.props.handleChange} defaultValue={weight || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Length:</label>
                    <input type="text" class="form-control" id="pwd" name="length" onChange={this.props.handleChange} defaultValue={length || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Width:</label>
                    <input type="text" class="form-control" id="pwd" name="width" onChange={this.props.handleChange} defaultValue={width || ""} disabled/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Height:</label>
                    <input type="text" class="form-control" id="pwd" name="height" onChange={this.props.handleChange} defaultValue={height || ""} disabled/>
                    </div>

                    </form>
                    
                    <br></br>

                    </React.Fragment>
                </Modal.Body>

                <Modal.Footer>

                    <button
                            id="submitBtn5"
                            type="button"
                            class="btn btn-primary"
                            onClick={this.props.generatePassbook}
                    >
                            Generate Passbook
                    </button>

                </Modal.Footer>
            </Modal>
            
        )
    }
}

export default VehicleModal