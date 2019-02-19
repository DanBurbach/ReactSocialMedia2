import React from "react";
import Profile from "./Profile/Profile";
import ListFriends from "./Friends/ListFriends";
import Feed from './Feed/Feed';
import * as styles from '../Styles/Main.jsx'

function Main(){
  return (
      <div>
        <div style={styles.wrapper}>
          <div style={styles.box} style={styles.a}><Profile/></div>
          <div style={styles.box} style={styles.b}><Feed/></div>
          <div style={styles.box} style={styles.c}><ListFriends/></div>
        </div>
      </div>
    );
  }


export default Main;
