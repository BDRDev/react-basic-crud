import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

//BrowserRouter is the piece of codes that interacts with the history library
//I think its the function that look sat the address bar and decides what to do

//Route is the workhouse, react component that can render in any other component
//if url looks like this show this component
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//For the route, those two props are always used
//if I go to this path, then show this component

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
	  	<div>
	  		<Switch>
	  			<Route path="/posts/new" component={PostsNew} />
		  		<Route path="/" component={PostsIndex} />
	  		</Switch>
		</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
