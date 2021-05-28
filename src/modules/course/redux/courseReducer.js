import { produce } from 'immer';
import { COURSE_ACTIONS } from './courseActionCreator';

const initialCourseState = {
  step: 1,
};

export const courseReducer = produce((state, action) => {
  switch (action.type) {
    case COURSE_ACTIONS.SET_STEP:
      state.step = action.payload.type;
      break;

    default:
      break;
  }
}, initialCourseState);
