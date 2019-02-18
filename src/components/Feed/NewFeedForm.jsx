import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewFeedForm(props) {

  let _name = null;
  let _post = null;

  function handleNewFeedFormSubmission(event) {
    event.preventDefault();
    console.log('hit here');
    props.onNewFeedCreation({name: _name.value, post: _post.value, id: v4()});
    _name.value = '';
    _post.value =' ';
  }

  return (
    <div>
      <form onSubmit={handleNewFeedFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <textarea
          id='post'
          placeholder='Post'
          ref={(textarea) => {_post = textarea;}}/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

NewFeedForm.propTypes = {
  onNewFeedCreation: PropTypes.func
};

export default NewFeedForm;
