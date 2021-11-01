import {createStore, applyMiddleware} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import saga from './sagas'

const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav,);
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(reducer, applyMiddleware(sagaMiddleware, navMiddleware));

sagaMiddleware.run(saga)
