import React from 'react';
import Header from './Header';
import Main from "./Main";
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  render (){
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=>
                <Main/>
              }/>
            <Route component={Error404} />
          </Switch>
      </div>
    );
  }
}

export default App;
