import React from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';

function FeedList(props){
  function like(id){
    props.likeFeedItem(id)
  }
  console.log(props);
  return (
    <div>
      {props.feedList.map((feed, index) =>
        <div>
          <div>
            <FeedItem name={feed.name}
              post={feed.post}
              likes={feed.likes}
              key={feed.id}/>
            <button onClick={() => like(feed.id)}> Like </button>
            <div>
              <hr/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

FeedList.propTypes = {
  feedList: PropTypes.array,
  likeFeedItem: PropTypes.func
};

export default FeedList;
