import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { userPersist } from '../utils/persistConfig';
import userReducer from './slice/auth.slice';

const rootReducer = combineReducers({
  auth: persistReducer(userPersist, userReducer),
});

export default rootReducer;
