import web3 from './web3';
import Vehicle from './build/Vehicle.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Vehicle.interface),
        address
    );
}