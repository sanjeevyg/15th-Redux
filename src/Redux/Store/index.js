import rootReducers from '../Reducers'
import { createStore } from 'redux';
export default createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())