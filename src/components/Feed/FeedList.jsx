import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';

function FeedList(props){
  console.log("hit");
  return (
    <div>
      <hr/>
      {props.feedList.map((feed) =>
        <Feed name={feed.name}
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
