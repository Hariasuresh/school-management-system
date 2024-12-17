import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import studentReducer from './reducers/studentReducer';
import libraryReducer from './reducers/libraryReducer';
import feesReducer from './reducers/feesReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    library: libraryReducer,
    fees: feesReducer,
  },
});

export default store;
