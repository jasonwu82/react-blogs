import React from 'react';

const Post = function(props) {
  var number = props.number;
  return (
    <div>
      This is my {number} th post
    </div>
  );
};

export default Post;
