import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Payment from './payment/reducer';

const reducers = combineReducers({
  Payment
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Payment']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
