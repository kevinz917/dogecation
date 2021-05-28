import actionCreator from 'redux/actionCreator';

export const COURSE_ACTIONS = {
  SET_STEP: 'SET_STEP',
};

export default {
  setStep(nextStep) {
    return actionCreator(COURSE_ACTIONS.SET_STEP, { step: nextStep });
  },
};
