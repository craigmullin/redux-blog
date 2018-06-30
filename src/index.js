import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import PostList from './components/post-list';

// add two routes
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={PostList}/>
      {/* <Route path="/posts/:id" component={PostDetail}/>
      <Route path="/posts/new" component={PostCreate}/> */}
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
