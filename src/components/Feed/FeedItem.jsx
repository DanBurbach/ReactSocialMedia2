import React from 'react';
import PropTypes from 'prop-types';

function FeedItem(props) {
  return (

    <div>
      <h3>{props.post}</h3>
      <p><em>{props.name}</em></p>
      <hr/>
    </div>

  );
}

FeedItem.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string
};

export default FeedItem;
