import React from "react";
import PropTypes from 'prop-types';

const profileImage = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '2px solid #2c97de',
  height: '70px',
  width: '80px',
  borderRadius: '25%',
}

const friendBox = {
  display: 'flex',
  marginTop: '30px'
}

const addFriendStyle = {
  fontSize: '14px'
}

const friends = [
  {
    name:"Flippy flop",
    url: 'https://www.gannett-cdn.com/-mm-/eb9153ef471ec1cb22faf645d7d063754d336115/c=0-330-2006-3000&r=2006x2670/local/-/media/USATODAY/test/2013/08/09/1376068652000-mmiin07p.jpg?width=534&height=712&fit=crop'
  },
  {
    name:"Hooti Hoo",
    url: 'https://animals.sandiegozoo.org/sites/default/files/2016-10/owl_southern_white_faced.jpg'
  }
]

function ListFriends(){
  return (
    <div>
      <p> Add Friends </p>
        {friends.map((friend, index) =>
          <div style={friendBox}>
            <p>{friend.name}</p>
              <div>
                <img style={profileImage} src={friend.url}/>
              </div>
            <button style={addFriendStyle}> Add Friend </button>
          </div>
        )}
    </div>

  )
}

ListFriends.propTypes = {
  listFriends: PropTypes.array
};

export default ListFriends;
