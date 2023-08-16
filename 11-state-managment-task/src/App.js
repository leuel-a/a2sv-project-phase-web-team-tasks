import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
import { Provider } from 'react-redux';
import store from './store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { postsApi } from './features/apiSlice';


const App = () => {
  return (
    <Provider store={ store }>
      <ApiProvider api={ postsApi }>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create_blog" element={ <CreateBlog /> } />
            <Route path="/post/:id" element={ <PostDetail /> } />
            <Route path="/post/edit/:id" element={ <EditPost /> } />
          </Routes>
        </Router>
      </ApiProvider>
    </Provider>
  );
}

export default App;
