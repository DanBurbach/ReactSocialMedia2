import React from 'react';
import PropTypes from "prop-types";
import Feed from './Feed';
import NewFeedForm from './NewFeedForm'
class NewFeedControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  handleTroubleshootingConfirmation(){
   this.setState({formVisibleOnPage: true});
 }

  render(){
    let currentlyVisibleContent = null;

       currentlyVisibleContent = <NewFeedForm onNewFeedCreation={this.props.onNewFeedCreation}/>;
       console.log(this.props.onNewFeedCreation);

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewFeedControl.propTypes = {
  onNewFeedCreation: PropTypes.func
};

export default NewFeedControl;
