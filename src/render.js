import React from 'react'
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
export {
    rerenderEntireTree
}