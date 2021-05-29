import produce from 'immer';
import { ETH_ACTIONS } from './ethactions';

const initialState = {
  address: '',
};

export const ethReducer = produce((state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ETH_ACTIONS.SET_ADDRESS:
      state.address = payload.address;
  }
}, initialState);
