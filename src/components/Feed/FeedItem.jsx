import React from 'react';
import PropTypes from 'prop-types';

function FeedItem(props) {

  function handleLike(){
   console.log("Boom Baby")
  }
  return (

    <div>
      <h3>{props.post}</h3>
      <p><em>{props.name}</em></p>
      <p>Likes: {props.likes}</p>
    </div>

  );
}

FeedItem.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string,
  likes: PropTypes.number
};

export default FeedItem;
