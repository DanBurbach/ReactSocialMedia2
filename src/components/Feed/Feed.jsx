import React from 'react';
import FeedList from './FeedList';
import NewFeedControl from './NewFeedControl';

class Feed extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterFeedList: []
    };
    this.handleAddingNewPostToFeed =
    this.handleAddingNewPostToFeed.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleAddingNewPostToFeed(newPost){
    let newMasterFeedList = this.state.masterFeedList.slice();
    newMasterFeedList.push(newPost);
    this.setState({masterFeedList: newMasterFeedList});
  }

  handleLike(id){
    let feedItems = this.state.masterFeedList.slice();
    feedItems.forEach(function(feedItem){
      if (id === feedItem.id) {
        feedItem.likes += 1
      }
    })
    this.setState({masterFeedList: feedItems});
  }

  render (){
    return (
      <div>
        <NewFeedControl onNewFeedCreation={this.handleAddingNewPostToFeed} />
        <FeedList likeFeedItem={this.handleLike} feedList={this.state.masterFeedList} />
      </div>
    );
  }
}

export default Feed;
