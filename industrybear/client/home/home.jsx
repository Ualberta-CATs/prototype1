import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render() {
    return (
    <div class="post-container">
        /* TODO: specify file to upload to */
        <form class="post-form" enctype="multipart/form-data" action="togoPost.html" method="post">
          /*TODO: max characters? --> */
          <textarea name="post-textarea" rows="8" cols="80">
            Tell your connections what you have been up to!
          </textarea>
              <label class="upload-label" for="upload-photo"> Upload a photo </label>
              <input type="file" name="upload-input" accept="image/*" id="upload-photo">
          <button type="submit" name="post-button">
            Post
          </button>
        </form>
    </div>
  )}
}

REACTDOM.render(
  <Home />,
  document.getElementById('root')
);
