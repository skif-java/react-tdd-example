import React, { Component } from 'react';

import AddPerson from './AddPerson'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'Alan', lastName: 'Turing' },
        { firstName: 'Alanzo', lastName: 'Church' },
        { firstName: 'Grace', lastName: 'Hopper' }
      ],
      view: 'PersonList'
    };
  }
  addPerson(){
    this.setState({ view: 'AddPerson'})
  }
  getCurrentView(){
    switch(this.state.view){
      case 'AddPerson': return <AddPerson />
      // default: return <PersonList />
    }
  }
  render() {
    return (
      <div className="App">
        <button>Add Person</button>
        {
          this.getCurrentView()
        }
      </div>
    );
  }
}