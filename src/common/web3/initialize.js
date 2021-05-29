import Web3 from 'web3';
import { store } from '../../index';
import ethActions from '../../redux/web3/ethactions';

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert('No eth browser detected ~');
  }
};

export const loadBlockchainData = async () => {
  const web3 = window.web3;

  const accounts = await window.web3.eth.getAccounts();

  console.log('Address', accounts[0]);

  store.dispatch(ethActions.setAddress(accounts[0]));
};
