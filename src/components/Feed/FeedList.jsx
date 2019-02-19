import React from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';

function FeedList(props){
  console.log("hit");
  return (
    <div>
      <hr/>
      {props.feedList.map((feed) =>
        <FeedItem name={feed.name}
          post={feed.post}
          key={feed.id}/>
      )}
        </div>
      );
    }

    FeedList.propTypes = {
      feedList: PropTypes.array
    };

    export default FeedList;
