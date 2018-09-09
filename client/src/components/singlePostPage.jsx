import React from 'react';
import Post from './post';

const SinglePostPage = function(props) {
  var number = props.match.params.postId;
  return (
    <Post number={number}></Post>
  );
};

export default SinglePostPage;
