import React, { Component } from 'react';
// import "../banner/banner.html";
// import "./home.html"


export default class Home extends Component {

  constructor(){
    console.log('the constructor is called');
   super()
   this.state = {
    }
  }

  render() {
    console.log('the render function was called');
    return (
      <div><h1>hello from the home page</h1></div>
    );
  }
}
