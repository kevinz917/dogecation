import { combineReducers } from 'redux';
import { testReducer } from '../modules/test/testReducer';
import { courseReducer } from '../modules/course/redux/courseReducer';

const MasterReducer = combineReducers({
  test: testReducer,
  course: courseReducer,
});

export default MasterReducer;
