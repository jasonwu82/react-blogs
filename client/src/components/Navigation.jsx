import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/sample">Sample</Link></li>
      <li><Link to="/posts">Posts</Link></li>
    </ul>
  </div>
);

export default Navigation;
