import React from "react";
import Profile from "./Profile/Profile";
import Feed from "./Feed/Feed";
import ListFriends from "./Friends/ListFriends";
import FeedList from './Feed/FeedList';
import NewFeedControl from './Feed/NewFeedControl';

const wrapper = {
  display: 'grid',
  gridGap: '2px',
  gridTemplateColumns: '33% 33% 33%',
  justifyContent: "space-between",
  backgroundColor:' #fff',
  color: '#444',
  fontFamily: 'Arial, Helvetica, sans-serif'
}

const box = {
  backgroundColor: "#444",
  color: '#fff',
  borderRadius: '5px',
  padding: '20px',
  fontSize: '150%'
}

const a = {
  gridColumn: '1',
  gridRow: '1',
  margin: '20px',
}

const b = {
  gridColumn: '2',
  gridRow: '1',
  margin: '20px',
  border: "1px solid black",
  boxShadow: '10px 10px 5px grey'
}

const c = {
  gridColumn: '3',
  gridRow: '1',
  margin: '20px',
  border: "1px solid black",
  boxShadow: '10px 10px 5px grey'
}

class Main extends React.Component{

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

  render() {
    return (
      <div>
        <div style={wrapper}>
          <div style={box} style={a}><Profile/></div>
          <div style={box} style={b}><Feed/>
          <div>
            <NewFeedControl onNewFeedCreation={this.handleAddingNewPostToFeed} />
            <FeedList feedList={this.state.masterFeedList} />
          </div>
        </div>
        <div style={box} style={c}><ListFriends/></div>
      </div>
    </div>
  );
}
}

export default Main;
