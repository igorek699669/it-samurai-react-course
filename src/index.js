import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'

let rerenderEntireTree =() => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=> {
    rerenderEntireTree()
})