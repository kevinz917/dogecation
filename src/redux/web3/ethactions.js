import actionCreator from 'redux/actionCreator';

export const ETH_ACTIONS = {
  SET_ADDRESS: 'SET_ADDRESS',
};

export default {
  setAddress(address) {
    return actionCreator(ETH_ACTIONS.SET_ADDRESS, { address });
  },
};
