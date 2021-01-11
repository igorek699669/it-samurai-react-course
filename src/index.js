import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: 1, name: 'dima1'},
    {id: 2, name: 'dima2'},
    {id: 3, name: 'dima3'},
    {id: 4, name: 'dima4'},
    {id: 5, name: 'dima5'},
];
let messageData = [
    {id: 1, message: 'hi1'},
    {id: 2, message: 'hi2'},
    {id: 3, message: 'hi3'},
];
let postsData = [
    {id: 1, message: 'hi', likesCount: 12},
    {id: 2, message: 'hello', likesCount: 11},
];
ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
