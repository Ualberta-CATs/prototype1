import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
      <label>Username:</label>
      <input type='text'/>
      <label>Password:</label>
      <input type='text'/>
      <button>Log In</button>
      </div>
    );
  }
}
