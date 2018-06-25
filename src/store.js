import { createStore } from 'redux';
import guessReducer from './reducers/guessReducer.js'

const store = createStore(guessReducer);

export default store;
