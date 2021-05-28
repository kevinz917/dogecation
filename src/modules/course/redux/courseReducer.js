import { produce } from 'immer';
import { COURSE_ACTIONS } from './courseActionCreator';

const initialCourseState = {
  step: 2,
};

export const courseReducer = produce((state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case COURSE_ACTIONS.SET_STEP:
      state.step = payload.step;
      break;

    default:
      break;
  }
}, initialCourseState);
