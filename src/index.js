import React from 'react';
import './index.css';
import {store} from './redux/state'

import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                appState={state}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)