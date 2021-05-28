import actionCreator from 'redux/actionCreator';

export const COURSE_ACTIONS = {
  SET_STEP: 'SET_STEP',

  SET_NFT_FIELD: 'SET_NFT_FIELD',
};

export default {
  setStep(nextStep) {
    return actionCreator(COURSE_ACTIONS.SET_STEP, { step: nextStep });
  },
  setNFTField(field, value) {
    return actionCreator(COURSE_ACTIONS.SET_NFT_FIELD, { field, value });
  },
};
