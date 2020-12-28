import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/Reducers'

export default createStore(reducers, applyMiddleware(thunk)); 