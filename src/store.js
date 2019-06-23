import { createStore, applyMiddleware} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import thunk from 'redux-thunk';
import reducer from './reducers';
import logger from 'redux-logger';
let socket = io('http://localhost:3013');
let socketIoMiddleware = createSocketIoMiddleware(socket);


const middleware = [thunk, socketIoMiddleware,logger];

let store = createStore(
    reducer,
    applyMiddleware(...middleware),


);
store.subscribe(()=>{
    console.log('new client state', store.getState());
});


export default store;