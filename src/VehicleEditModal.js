import React, { PureComponent } from 'react';
import Modal from "react-bootstrap/Modal";
import web3 from './web3';
import vehicle from './vehicle';
import {Button} from 'semantic-ui-react';

class VehicleEditModal extends PureComponent {
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

    }

    // axios.get(GET_TSR_LIST + page)
    //     .then(response => {
    //         this.setState({ Tsr: response.data.content, FilteredTsr: response.data.content})

    //         const totalPages = response.data.totalPages;
    //         const itemsCountPerPage = response.data.size;
    //         const totalItemsCount = response.data.totalElements;

    //         this.setState({totalPages: totalPages})
    //         this.setState({totalItemsCount: totalItemsCount})
    //         this.setState({itemsCountPerPage: itemsCountPerPage})

    //         console.log("total Pages: ",totalPages);
    //         console.log("active page: ",this.state.activePage);
    //         console.log("itemsCountPerPage: ",this.state.itemsCountPerPage);
    //       });

    render() {
        const { owner, rAddress, nic, date, province, condition, capacity, vClass, vType, make, seats, model, status, country, wheelbase, overHang, body, yearOfManufacture, tyreSize, weight, length, width, height, engine, chasis, colour} = this.props

        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose, this.props.refreshPage} size="xl">
                <Modal.Header closeButton>
                <Modal.Title>{this.props.regNo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <React.Fragment>
                    <header className="App-header" style={{marginLeft: '43%', marginRight: '200px', marginBottom: '40px'}}>
                        <h1>Vehicle Details</h1>
                    </header>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px'}}>
                        <h3>Ownership Details: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Name:</label>
                    <input  type="text" class="form-control" id="usr" name="owner" onChange={this.props.handleChange} defaultValue={owner || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Address:</label>
                    <input type="text" class="form-control" id="pwd" name="rAddress" onChange={this.props.handleChange} defaultValue={rAddress || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">NIC:</label>
                    <input type="text" class="form-control" id="usr" name="nic" onChange={this.props.handleChange} defaultValue={nic || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Date:</label>
                    <input type="text" class="form-control" id="pwd" name="date" onChange={this.props.handleChange} defaultValue={date || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                        <Button loading  = {this.props.loading1} type='submit' onClick={this.props.handleSubmitCreateOwner}>Submit</Button>
                    </div>


                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 01: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Engine No:</label>
                    <input type="text" class="form-control" id="pwd" name="engine" onChange={this.props.handleChange} defaultValue={engine || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                        <Button loading  = {this.props.loading4} type='submit' onClick={this.props.handleSubmitSetEngine}>Submit</Button>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Chasis No:</label>
                    <input type="text" class="form-control" id="pwd" name="chasis" onChange={this.props.handleChange} defaultValue={chasis || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                    <Button loading  = {this.props.loading5} type='submit' onClick={this.props.handleSubmitSetChasis}>Submit</Button>
                    </div>  

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Colour:</label>
                    <input type="text" class="form-control" id="pwd" name="colour" onChange={this.props.handleChange} defaultValue={colour || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                    <Button loading  = {this.props.loading6} type='submit' onClick={this.props.handleSubmitSetColour}>Submit</Button>
                    </div>
                    
                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 02: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Registered Province:</label>
                    <input  type="text" class="form-control" id="usr" name="province" onChange={this.props.handleChange} defaultValue={province || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Vehicle Condition:</label>
                    <input type="text" class="form-control" id="pwd" name="condition" onChange={this.props.handleChange} defaultValue={condition || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Cylinder Capacity:</label>
                    <input type="text" class="form-control" id="usr" name="capacity" onChange={this.props.handleChange} defaultValue={capacity || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Vehicle Class:</label>
                    <input type="text" class="form-control" id="pwd" name="vClass" onChange={this.props.handleChange} defaultValue={vClass || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Fuel Type:</label>
                    <input  type="text" class="form-control" id="usr" name="vType" onChange={this.props.handleChange} defaultValue={vType || "Petrol"}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Number of Seats:</label>
                    <input type="text" class="form-control" id="pwd" name="seats" onChange={this.props.handleChange} defaultValue={seats || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Make:</label>
                    <input type="text" class="form-control" id="usr" name="make" onChange={this.props.handleChange} defaultValue={make || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Model:</label>
                    <input type="text" class="form-control" id="pwd" name="model" onChange={this.props.handleChange} defaultValue={model || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Status:</label>
                    <input type="text" class="form-control" id="pwd" name="status" onChange={this.props.handleChange} defaultValue={status || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                        <Button loading  = {this.props.loading2} type='submit' onClick={this.props.handleSubmitSetAllStaticOne}>Submit</Button>
                    </div>

                    <div className="semi-header" style={{marginLeft: '150px', marginRight: '200px', marginBottom: '20px', marginTop: '30px'}}>
                        <h3>Vehicle Details Section 03: </h3>
                    </div>

                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Country Origin:</label>
                    <input  type="text" class="form-control" id="usr" name="country" onChange={this.props.handleChange} defaultValue={country || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Wheelbase:</label>
                    <input type="text" class="form-control" id="pwd" name="wheelbase" onChange={this.props.handleChange} defaultValue={wheelbase || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Over Hang:</label>
                    <input type="text" class="form-control" id="usr" name="overHang" onChange={this.props.handleChange} defaultValue={overHang || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Type of Body:</label>
                    <input type="text" class="form-control" id="pwd" name="body" onChange={this.props.handleChange} defaultValue={body || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Year of Manufacture:</label>
                    <input  type="text" class="form-control" id="usr" name="yearOfManufacture" onChange={this.props.handleChange} defaultValue={yearOfManufacture || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Tyre Size:</label>
                    <input type="text" class="form-control" id="pwd" name="tyreSize" onChange={this.props.handleChange} defaultValue={tyreSize || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="usr">Weight:</label>
                    <input type="text" class="form-control" id="usr" name="weight" onChange={this.props.handleChange} defaultValue={weight || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Length:</label>
                    <input type="text" class="form-control" id="pwd" name="length" onChange={this.props.handleChange} defaultValue={length || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Width:</label>
                    <input type="text" class="form-control" id="pwd" name="width" onChange={this.props.handleChange} defaultValue={width || ""}/>
                    </div>
                    <div class="form-group" style={{marginLeft: '200px', marginRight: '200px'}}>
                    <label for="pwd">Height:</label>
                    <input type="text" class="form-control" id="pwd" name="height" onChange={this.props.handleChange} defaultValue={height || ""}/>
                    </div>
                    <div style={{marginLeft: '825px'}}>
                        <Button loading  = {this.props.loading3} type='submit' onClick={this.props.handleSubmitSetAllStaticTwo}>Submit</Button>
                    </div>
                    


                    <br></br>

                    </React.Fragment>
                </Modal.Body>
                <Modal.Footer>

                    {/* <Button loading  = {this.props.loading} type='submit' onClick={this.props.handleSubmit}>Submit</Button> */}

                    <button
                        id="submitBtn5"
                        type="button"
                        class="btn btn-primary"
                        onClick={this.props.postRequest}
                        // disabled={this.props.createVehicle()}
                        >
                        Create
                    </button>

                    <button
                        id="submitBtn5"
                        type="button"
                        class="btn btn-success"
                        onClick={this.props.putRequest}
                        disabled={this.props.editVehicle()}
                        >
                        Edit
                    </button>

                    <button
                        id="submitBtn5"
                        type="button"
                        class="btn btn-danger"
                        onClick={this.props.handleClose, this.props.refreshPage}
                        >
                        Close
                    </button>
                    
                </Modal.Footer>
            </Modal>
            
        )
    }
}

export default VehicleEditModal;