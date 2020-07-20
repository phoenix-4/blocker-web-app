import web3 from './web3';
import VehicleFactory from './build/VehicleFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(VehicleFactory.interface),
    '0x32b64d77194eb178bf64f84ecb042211125419f8'
);

export default instance;