import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import './index.css';
import App from './main/App';
import reducers from './main/reducers'
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers,devTools)

ReactDOM.render( 
    <Provider store={store}>
        <App /> 
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();