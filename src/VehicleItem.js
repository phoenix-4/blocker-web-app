import React, { PureComponent } from 'react';
import { Card, Button } from 'semantic-ui-react';
import VehicleModal from './VehicleModal';
import vehicle from './vehicle';
import web3 from './web3';
import axios from "axios";
import './routerComponents/home.css';
import VehicleEditModal from './VehicleEditModal';
import VehicleHistoryModal from './VehicleHistoryModal';

class VehicleItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            showModal2: false,
            showModal3: false,
            owner: '',
            nic: '',
            rAddress: '',
            engine: '',
            chasis: '',
            province: '',
            manager: '',
            regNo: '',
            colour: '',
            date: '',
            province: '', condition: '', capacity: '', vClass: '', vType: '', make: '', seats: '', model: '', status: '',
            country: '', wheelbase: '', overHang: '', body: '', yearOfManufacture: '', tyreSize: '', weight: '', length: '', width: '', height: '',
            engine: '',
            chasis: '',
            colour: '',
            ownerships: {},
            chassisNumbers: {},
            engineNumbers: {},
            colours:{},
            loading: false ,
            loading1: false ,
            loading2: false ,
            loading3: false,
            loading4: false ,
            loading5: false ,
            loading6: false,
            clickedCreate: false,
            clickedEdit: true,


        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitCreateOwner  = this.handleSubmitCreateOwner.bind(this);
        this.handleSubmitSetAllStaticOne  = this.handleSubmitSetAllStaticOne.bind(this);
        this.handleSubmitSetAllStaticTwo  = this.handleSubmitSetAllStaticTwo.bind(this);
        this.handleSubmitSetEngine = this.handleSubmitSetEngine.bind(this);
        this.handleSubmitSetChasis = this.handleSubmitSetChasis.bind(this);
        this.handleSubmitSetColour = this.handleSubmitSetColour.bind(this);
        
    }

    async componentDidMount() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        const regNo = await vehicleId.methods.registrationNumber().call();
        this.setState({ regNo });
        this.props.getRegNumbers(this.state.regNo)
    }

    async getValues() {
        const vehicleId = vehicle(this.props.vehicleAddress);

        try{
            const owner = await vehicleId.methods.owner().call();
            const nic = await vehicleId.methods.nic().call();
            const rAddress = await vehicleId.methods.Raddress().call();
            const date = await vehicleId.methods.date().call();
            const province = await vehicleId.methods.provincialCouncil().call();
            const condition = await vehicleId.methods.vCondition().call();
            const capacity = await vehicleId.methods.vCylinderCapacity().call();
            const vClass = await vehicleId.methods.vClass().call();
            const vType = await vehicleId.methods.vFuelType().call();
            const make = await vehicleId.methods.vMake().call();
            const seats = await vehicleId.methods.vSeating().call();
            const model = await vehicleId.methods.vModel().call();
            const status = await vehicleId.methods.vStatus().call();
            const country = await vehicleId.methods.vCountryOrigin().call();
            const wheelbase = await vehicleId.methods.vWheelbase().call();
            const overHang = await vehicleId.methods.vOverHang().call();
            const body = await vehicleId.methods.vTypeOfBody().call();
            const yearOfManufacture = await vehicleId.methods.vYrOfMan().call();
            const tyreSize = await vehicleId.methods.vTyreSize().call();
            const weight = await vehicleId.methods.vWeight().call();
            const length = await vehicleId.methods.vLength().call();
            const width = await vehicleId.methods.vWidth().call();
            const height = await vehicleId.methods.vHeight().call();
            const engine = await vehicleId.methods.engine().call();
            const chasis = await vehicleId.methods.chassis().call();
            const colour = await vehicleId.methods.colour().call();

        this.setState({ 
            owner, nic, rAddress, date, 
            province, condition, capacity, vClass, vType, make, seats, model, status, 
            country, wheelbase, overHang, body, yearOfManufacture, tyreSize, weight, length, width, height,
            colour, chasis, engine
        });
        }
        catch(error) {
          console.log("ERROR : ", error)  
        }     
    }

    async getHistoryOwner() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        let ownerships='';
        let i=0;
        var data = [];
        for(i;0<=i;i++){
            try{
                ownerships = await vehicleId.methods.ownerships(i).call();
                for(let j=0; j<3; j++){
                    console.log(ownerships[j]);
                    data.push(ownerships[j]);
                }    
            }
            catch(error) {
                console.log("ERROR : ", error);
            }
            if(ownerships==null){
                break;
            }
            ownerships=null
        }
        this.setState({
            ownerships: data
          })
        console.log("state ownerships : ", this.state.ownerships)
    }

    async getHistoryChasis() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        let chassisNumbers='';
        let i=0;
        var data = [];
        for(i;0<=i;i++){
            try{
                chassisNumbers = await vehicleId.methods.chassisNumbers(i).call();
                for(let j=0; j<3; j++){
                    console.log(chassisNumbers[j]);
                    data.push(chassisNumbers[j]);
                }    
            }
            catch(error) {
                console.log("ERROR : ", error);
            }
            if(chassisNumbers==null){
                break;
            }
            chassisNumbers=null
        }
        this.setState({
            chassisNumbers: data
          })
        console.log("state chassisNumbers : ", this.state.chassisNumbers)
    }

    async getHistoryEngine() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        let engineNumbers='';
        let i=0;
        var data = [];
        for(i;0<=i;i++){
            try{
                engineNumbers = await vehicleId.methods.engineNumbers(i).call();
                for(let j=0; j<3; j++){
                    console.log(engineNumbers[j]);
                    data.push(engineNumbers[j]);
                }    
            }
            catch(error) {
                console.log("ERROR : ", error);
            }
            if(engineNumbers==null){
                break;
            }
            engineNumbers=null
        }
        this.setState({
            engineNumbers: data
          })
          console.log("state engineNumbers : ", this.state.engineNumbers)
    }

    async getHistoryColor() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        let colours='';
        let i=0;
        var data = [];
        for(i;0<=i;i++){
            try{
                colours = await vehicleId.methods.colours(i).call();
                for(let j=0; j<3; j++){
                    console.log(colours[j]);
                    data.push(colours[j]);
                }    
            }
            catch(error) {
                console.log("ERROR : ", error);
            }
            if(colours==null){
                break;
            }
            colours=null
        }
        this.setState({
            colours: data
          })
        console.log("state colours : ", this.state.colours)
    }

    openModal = () => (e) =>  {
        this.setState({showModal: true})
        this.getValues();
    }

    openModal2 = () => (e) =>  {
        this.setState({showModal2: true})
        this.getHistoryOwner();
        this.getHistoryChasis();
        this.getHistoryEngine();
        this.getHistoryColor();
    }

    openModal3 = () => (e) =>  {
        this.setState({showModal3: true})
        this.getValues();
    }

    handleClose = (event) =>{
        this.setState({showModal:false});
    }
    
    refreshPage= () => {
        window.location.reload(false);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                ...this.state.tsr,
                  [name]: value
            },
            () => {
              console.log("handleChange function called", this.state);
            }
          );
    }


    handleSubmitCreateOwner = async (event) => {
        this.setState({loading1: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.owner && this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .createOwner(this.state.owner, 
            this.state.rAddress, 
            this.state.nic,
            this.state.date).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading1 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading1 : false});
        }          
    }

    createVehicle = () => {
        if(this.state.owner == '') {
            return false;
          }
          else {
            
            return true;
          }
    }

    editVehicle = () => {
        if(this.state.owner !== '') {
            return false;
          }
          else {
            
            return true;
          }
    }


    handleSubmitSetAllStaticOne = async (event) => {
        this.setState({loading2: true});
        console.log(this.state.loading2)

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setAllStaticOne(
            this.state.province,
            this.state.condition,
            this.state.date,
            this.state.capacity,
            this.state.vClass,
            this.state.vType,
            this.state.seats,
            this.state.make,
            this.state.model,
            this.state.status,
        ).send
        ({
            gas: '3000000',
            from: accounts[0]
        });
        
        this.setState({loading2 : false});
        console.log(this.state.loading2)
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading2 : false});
        }    
    }


    handleSubmitSetAllStaticTwo = async (event) => {
        this.setState({loading3: true});
        console.log(this.state.loading3)

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setAllStaticTwo(
            this.state.country,
            this.state.wheelbase,
            this.state.overHang,
            this.state.body,
            this.state.yearOfManufacture,
            this.state.tyreSize,
            this.state.weight,
            this.state.length,
            this.state.width,
            this.state.height,
        ).send
        ({
            gas: '3000000',
            from: accounts[0]
        });
        
        this.setState({loading3 : false});
        console.log(this.state.loading3)
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading3 : false});
        }    
    }

    handleSubmitSetEngine = async (event) => {
        this.setState({loading4: true});
        console.log("Hellooooooooo")

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setengineNumber(this.state.engine, this.state.date).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading4 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading4 : false});
        }          
    }

    handleSubmitSetChasis = async (event) => {
        this.setState({loading5: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setchassisNumber(this.state.chasis, this.state.date).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading5 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading5 : false});
        }          
    }

    handleSubmitSetColour = async (event) => {
        this.setState({loading6: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data  Colour: ", this.state.colour)

        if(this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setColour(this.state.colour, this.state.date).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading6 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading6 : false});
        }          
    }

    postRequest = () => {
        axios.post("http://localhost:5000/vehicle/createVehicle",
        {

            hash: this.props.vehicleAddress,
            registrationNo : this.state.regNo,
            chassisNo: this.state.chasis,
            currentOwner: {
                owner: this.state.owner,
                address: this.state.rAddress,
                nic: this.state.nic
            },
            condition: this.state.condition,
            engineNo: this.state.engine,
            cylinderCapacity: this.state.capacity,
            classOfVehicle: this.state.vClass,
            taxationClass: this.state.vClass,
            statusWhenRegistered: this.state.status,
            fuelType: this.state.vType,
            make: this.state.make,
            countryOfOrigin: this.state.country,
            model: this.state.model,
            manufacturesDescription: "None",
            wheelBase: this.state.wheelbase,
            overHang: this.state.overHang,
            typeOfBody: this.state.body,
            yearOfManufacture: this.state.yearOfManufacture,
            colour: this.state.colour,
            seatingCapacity: this.state.seats,
            weight: this.state.weight,
            provincialCouncil: this.state.province,
            frontTyreSize: this.state.tyreSize,
            rearTyreSize: this.state.tyreSize,
            length: this.state.length,
            width: this.state.width,
            height: this.state.height,
            dateOfFirstRegistration: this.state.date,
            dateOfIssue: this.state.date,
            previousOwners: [this.state.ownerships]
        })
            .then(res => {
                console.log("post request called via frontend", res.data);
                alert("Data successfully sent to the Backend.")
          });
    }

    putRequest = () => {
        axios.put("http://localhost:5000/vehicle/updateVehicle",
        {
                hash: this.props.vehicleAddress,
                registrationNo : this.state.regNo,
                chassisNo: this.state.chasis,
                currentOwner: {
                    owner: this.state.owner,
                    address: this.state.rAddress,
                    nic: this.state.nic
                },
                condition: this.state.condition,
                engineNo: this.state.engine,
                cylinderCapacity: this.state.capacity,
                classOfVehicle: this.state.vClass,
                taxationClass: this.state.vClass,
                statusWhenRegistered: this.state.status,
                fuelType: this.state.vType,
                make: this.state.make,
                countryOfOrigin: this.state.country,
                model: this.state.model,
                manufacturesDescription: "None",
                wheelBase: this.state.wheelbase,
                overHang: this.state.overHang,
                typeOfBody: this.state.body,
                yearOfManufacture: this.state.yearOfManufacture,
                colour: this.state.colour,
                seatingCapacity: this.state.seats,
                weight: this.state.weight,
                provincialCouncil: this.state.province,
                frontTyreSize: this.state.tyreSize,
                rearTyreSize: this.state.tyreSize,
                length: this.state.length,
                width: this.state.width,
                height: this.state.height,
                dateOfFirstRegistration: this.state.date,
                dateOfIssue: this.state.date,
                previousOwners: [this.state.ownerships]
        },
        "mytoken", 
        {headers: {"Content-Type": "text/plain"}}
    )
    .then(res => console.log(res.status));
    // .catch(e => console.log(e));
    }

    generatePassbook = () => {
        axios.post("http://localhost:5000/genpdf")
            .then(res => {
                console.log("Generate Passbook called via frontend: ", res.data);
                // alert("File uploaded successfully.")
          });
    
        }


    render() {
        return (
            <div>
                <div className="cdcd">
                <Card.Group>

                    <Card style={{width: '310px'}}>
                        <Card.Content>
                            <Card.Header>{this.state.regNo}</Card.Header>
                            {this.props.vehicleAddress}
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui three buttons'>
                            <Button basic color='blue' onClick = {this.openModal3()}>
                                Create &amp; Edit
                            </Button>
                            <Button basic color='green' onClick = {this.openModal()}>
                                View
                            </Button>
                            <Button basic color='red' onClick = {this.openModal2()}>
                                History
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>

                   
                
                </Card.Group>
                </div>

                {this.state.showModal && (
                    <VehicleModal
                        showModal={this.state.showModal}
                        handleClose={this.handleClose}
                        handleSubmit={this.handleSubmit}
                        disabled={this.state.disabled}
                        refreshPage={this.refreshPage}
                        generatePassbook={this.generatePassbook}
                        vehicleAddress={this.props.vehicleAddress}
                        owner={this.state.owner}
                        nic={this.state.nic}
                        rAddress={this.state.rAddress}
                        engine={this.state.engine}
                        province={this.state.province}
                        manager={this.state.manager}
                        regNo={this.state.regNo}
                        chasis={this.state.chasis}
                        colour={this.state.colour}
                        date={this.state.date}
                        province={this.state.province}
                        condition={this.state.condition}
                        capacity={this.state.capacity}
                        vClass={this.state.vClass}
                        vType={this.state.vType}
                        make={this.state.make}
                        seats={this.state.seats}
                        model={this.state.model}
                        status={this.state.status}  
                        country = {this.state.country}
                        wheelbase = {this.state.wheelbase}
                        overHang = {this.state.overHang}
                        body = {this.state.body}
                        yearOfManufacture = {this.state.yearOfManufacture}
                        tyreSize = {this.state.tyreSize}
                        weight = {this.state.weight}
                        length = {this.state.length}
                        width = {this.state.width}
                        height = {this.state.height}
                        engine = {this.state.engine}
                        chasis = {this.state.chasis}
                        colour = {this.state.colour}                
                    />
                    )
                }

                {this.state.showModal3 && (
                    <VehicleEditModal
                        showModal={this.state.showModal3}
                        handleChange={this.handleChange}
                        handleSubmitCreateOwner={this.handleSubmitCreateOwner}
                        handleSubmitSetAllStaticOne={this.handleSubmitSetAllStaticOne}
                        handleSubmitSetAllStaticTwo = {this.handleSubmitSetAllStaticTwo}
                        handleSubmitSetEngine = {this.handleSubmitSetEngine}
                        handleSubmitSetChasis = {this.handleSubmitSetChasis}
                        handleSubmitSetColour = {this.handleSubmitSetColour}
                        handleClose={this.handleClose}
                        refreshPage={this.refreshPage}
                        createVehicle={this.createVehicle}
                        editVehicle={this.editVehicle}
                        putRequest={this.putRequest}
                        postRequest={this.postRequest}
                        vehicleAddress={this.props.vehicleAddress}
                        owner={this.state.owner}
                        nic={this.state.nic}
                        rAddress={this.state.rAddress}
                        engine={this.state.engine}
                        province={this.state.province}
                        manager={this.state.manager}
                        regNo={this.state.regNo}
                        chasis={this.state.chasis}
                        colour={this.state.colour}
                        date={this.state.date}
                        province={this.state.province}
                        condition={this.state.condition}
                        capacity={this.state.capacity}
                        vClass={this.state.vClass}
                        vType={this.state.vType}
                        make={this.state.make}
                        seats={this.state.seats}
                        model={this.state.model}
                        status={this.state.status}                    
                        country = {this.state.country}
                        wheelbase = {this.state.wheelbase}
                        overHang = {this.state.overHang}
                        body = {this.state.body}
                        yearOfManufacture = {this.state.yearOfManufacture}
                        tyreSize = {this.state.tyreSize}
                        weight = {this.state.weight}
                        length = {this.state.length}
                        width = {this.state.width}
                        height = {this.state.height}
                        engine = {this.state.engine}
                        chasis = {this.state.chasis}
                        colour = {this.state.colour}
                        loading = {this.state.loading}
                        loading1 = {this.state.loading1}
                        loading2 = {this.state.loading2}
                        loading3 = {this.state.loading3}
                        loading4 = {this.state.loading4}
                        loading5 = {this.state.loading5}
                        loading6 = {this.state.loading6}
                    />
                    )
                }

                    {this.state.showModal2 && (
                    <VehicleHistoryModal
                        showModal={this.state.showModal2}
                        handleClose={this.handleClose}
                        refreshPage={this.refreshPage}
                        regNo={this.state.regNo}
                        vehicleAddress={this.props.vehicleAddress}
                        ownerships={this.state.ownerships}
                        chassisNumbers={this.state.chassisNumbers}
                        engineNumbers={this.state.engineNumbers}
                        colours={this.state.colours}
                        
                    />
                    )
                }
        </div>

        )}       
}

export default VehicleItem