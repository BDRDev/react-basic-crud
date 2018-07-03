import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

//This is from redux-form
//we are just renaming the reducer to formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
