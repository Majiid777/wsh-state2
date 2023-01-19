import React, { Component } from 'react'
import './App.css';
import Profile from './components/profile/Profile';

export default class App extends Component {

  state={ isVisible: true,}

  handleShow =() => {this.setState({ isVisible: !this.state.isVisible  });}

  render() {
    return (
      <div className='App'>

        <button onClick={()=>this.handleShow()}>{this.state.isVisible ? "Show" : "Hide"}</button>
        {this.state.isVisible && <Profile/>} 


      </div>
    )
  }
}

