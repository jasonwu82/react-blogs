import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import Posts from './components/posts';
import SinglePostPage from './components/singlePostPage';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/posts",
    sidebar: () => <div>posts!</div>,
    exact: true,
    main: Posts
  },
  {
    path: "/posts/:postId",
    main: SinglePostPage
  }
];

const Routes = () => (
  <Router>
    <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

    <div>
      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
      </div>
    </div>
    
  </Router>
);

export default Routes;
