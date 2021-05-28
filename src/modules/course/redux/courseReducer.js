import { produce } from 'immer';
import { COURSE_ACTIONS } from './courseActionCreator';

const initialCourseState = {
  step: 3,
  nft: {
    id: 12,
    name: '',
    description: '',
    creationTime: new Date().getTime(),
  },
};

export const courseReducer = produce((state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case COURSE_ACTIONS.SET_STEP:
      state.step = payload.step;
      break;
    case COURSE_ACTIONS.SET_NFT_FIELD:
      let copy = Object.assign({}, state.nft);
      copy[payload.field] = payload.value;
      state.nft = copy;
      break;
    default:
      break;
  }
}, initialCourseState);
