import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addPost} from './redux/state'

let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} appState={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export {
    rerenderEntireTree
}