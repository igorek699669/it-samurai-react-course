import {addPostActionCreator, deletePost, profileReducer} from './profile-reducer'
import React from 'react';


let state = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11},
    ]
}
test('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(3)
});
test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.postsData[2].message).toBe('it-kamasutra.com')
});
test('after deleting lengt should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(1)
});

test('after deleting lengt should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(1)
});
