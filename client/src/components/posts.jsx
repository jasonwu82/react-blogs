import React from 'react';
import Navigation from './Navigation';
import Post from './post';

const Posts = function(props) {
  const numbers = [1, 2, 3, 4, 5];
  const postList = numbers.map((number) => <ui><Post number={number}/></ui>)
  return (
    <div>
    <Navigation></Navigation>
    <ul>{postList}</ul>
    </div>
  );
};

export default Posts;
