import React, { PureComponent } from 'react';
import { Card, Button } from 'semantic-ui-react';
import VehicleModal from './VehicleModal';
import vehicle from './vehicle';
import web3 from './web3';
import './routerComponents/home.css';
import VehicleEditModal from './VehicleEditModal';
import VehicleHistoryModal from './VehicleHistoryModal';

class VehicleItem2 extends PureComponent {
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
            loading6: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.handleSubmit1  = this.handleSubmit1.bind(this);
        this.handleSubmit2  = this.handleSubmit2.bind(this);
        this.handleSubmit3  = this.handleSubmit3.bind(this);
        this.handleSubmit4  = this.handleSubmit4.bind(this);
        this.handleSubmit5  = this.handleSubmit5.bind(this);
    }

    async componentDidMount() {
        const vehicleId = vehicle(this.props.vehicleAddress);
        const regNo = await vehicleId.methods.registrationNumber().call();
        this.setState({ regNo });
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

    handleSubmit = async (event) => {
        this.setState({loading: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.colour && this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setAll(this.state.owner, 
            this.state.rAddress, 
            this.state.nic,
            this.state.email,
            this.state.telephone,
            this.state.date, 
            this.state.province, 
            this.state.chasis,
            this.state.engine, 
            this.state.colour).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading : false});
        }          
    }

    handleSubmit1 = async (event) => {
        this.setState({loading1: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.owner && this.state.date){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .createOwner(this.state.owner, 
            this.state.rAddress, 
            this.state.nic,
            this.state.email,
            this.state.telephone,
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

    handleSubmit2 = async (event) => {
        this.setState({loading2: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.province){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setProvincialCouncil(this.state.province).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading2 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading2 : false});
        }          
    }

    handleSubmit3 = async (event) => {
        this.setState({loading3: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.engine){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setengineNumber(this.state.engine, this.state.date).send
        ({
            gas: '3000000',
            from: accounts[0]
        });

        this.setState({loading3 : false});
        }
        else{
            console.log("DATA NOT PROVIDED...")
            this.setState({loading3 : false});
        }          
    }

    handleSubmit4 = async (event) => {
        this.setState({loading4: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data : ", this.state)

        if(this.state.chasis){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setchassisNumber(this.state.chasis, this.state.date).send
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

    handleSubmit5 = async (event) => {
        this.setState({loading5: true});

        const accounts = await web3.eth.getAccounts();
        console.log("vehicle Edited Data  Colour: ", this.state.colour)

        if(this.state.colour){
            const vehicleId = vehicle(this.props.vehicleAddress);
        
        await vehicleId.methods
        .setColour(this.state.colour, this.state.date).send
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

export default VehicleItem2;