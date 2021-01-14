import {rerenderEntireTree} from '../render'

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
let state ={
    profilePage:{
        postsData,
        newPostText: 'itkama',
    },
    dialogsPage: {
        messageData,
        dialogsData,
    },
};
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let changeNewPostText = (text) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}
export {
    state
}
