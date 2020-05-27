import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'


import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import  reducers  from './store/reducer';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['regular']
// }

// const pReducer = persistReducer(persistConfig, reducers);

// const store = createStore(pReducer);
// const persistor = persistStore(store);

ReactDOM.render(
    
    <App />,
    
  document.getElementById('root')
);
serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
