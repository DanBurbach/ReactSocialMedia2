import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {
  return (

    <div>
      <h3>{props.post}</h3>
      <p><em>{props.name}</em></p>
      <hr/>
    </div>

  );
}

Feed.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string
};

export default Feed;
