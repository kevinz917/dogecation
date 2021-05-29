import { combineReducers } from 'redux';
import { testReducer } from '../modules/test/testReducer';
import { courseReducer } from '../modules/course/redux/courseReducer';
import { ethReducer } from '../redux/web3/ethreducer';

const MasterReducer = combineReducers({
  test: testReducer,
  course: courseReducer,
  eth: ethReducer,
});

export default MasterReducer;
