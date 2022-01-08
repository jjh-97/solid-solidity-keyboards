import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xd1fc11D32213F567E4738Dd385be39C73a3D7631';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}