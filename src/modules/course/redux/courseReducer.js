import { produce } from 'immer';
import { COURSE_ACTIONS } from './courseActionCreator';

const initialCourseState = {
  step: 3,
  nft: {
    id: 12,
    name: '',
    description: '',
    dna: '',
  },
};

const createDNA = () => {
  const numbers = '0123456789';
  const dna = [];
  for (let i = 0; i < 16; i++) {
    dna.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
  }
  return dna.join('');
};

console.log(createDNA());

export const courseReducer = produce((state, action) => {
  const { payload } = action;

  switch (action.type) {
    case COURSE_ACTIONS.SET_STEP:
      state.step = payload.step;
      break;
    case COURSE_ACTIONS.SET_NFT_FIELD:
      let copy = Object.assign({}, state.nft);
      copy[payload.field] = payload.value;
      state.nft = copy;
      break;
    case COURSE_ACTIONS.SET_DNA:
      let newDNA = createDNA();
      state.nft.dna = newDNA;
      break;

    default:
      break;
  }
}, initialCourseState);
