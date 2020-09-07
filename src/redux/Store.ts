import {createStore} from '@reduxjs/toolkit';
import rootReducer from 'redux/reducers/Root';

const store = createStore(rootReducer);

export default store;
