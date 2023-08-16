import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    blog: blogReducer,
    middleware: [thunkMiddleware],
  }
})
