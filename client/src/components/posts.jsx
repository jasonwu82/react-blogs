import React from 'react';
import Navigation from './Navigation';
import Post from './post';
import _ from 'lodash';

const Posts = function(props) {
  const numbers = _.range(1, 7);
  const postList = numbers.map((number) => <ui><Post number={number}/></ui>)
  return (
    <div>
    <ul>{postList}</ul>
    </div>
  );
};

export default Posts;
