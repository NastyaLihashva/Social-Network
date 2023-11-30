import profileReducer, { addPostActionCreater, deletePost } from "./profile-reducer";
import React from "react";


let state = {
    postsData: [
        {id: 1, message: 'Hi! How are you?', likesCount: 10},
        {id: 2, message: 'Im so happy!', likesCount: 16},
        {id: 3, message: 'Its my first post!', likesCount: 21}
    ],
    profile: null,
    status: ''
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreater('hello world');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
  });


test('message of new post should be correct', () => {
  let action = addPostActionCreater('hello world');
  let newState = profileReducer(state, action);
  expect(newState.postsData[3].message).toBe('hello world');
});


test('after delete length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});


test('after delete length of messages shouldnt be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});


