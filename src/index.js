import React from 'react';
import './index.css';
import {state, subscribe} from './redux/state'

import ReactDOM from 'react-dom'
import App from './App'
import {addPost, changeNewPostText} from './redux/state'

let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} changeNewPostText={changeNewPostText} appState={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)