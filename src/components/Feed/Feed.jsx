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
  }

  handleAddingNewPostToFeed(newPost){
    let newMasterFeedList = this.state.masterFeedList.slice();
    newMasterFeedList.push(newPost);
    this.setState({masterFeedList: newMasterFeedList});
  }

  render (){
    return (
      <div>
        <NewFeedControl onNewFeedCreation={this.handleAddingNewPostToFeed} />
        <FeedList feedList={this.state.masterFeedList} />
      </div>
    );
  }
}

export default Feed;
