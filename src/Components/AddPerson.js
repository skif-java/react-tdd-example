import React, { Component } from 'react'

class AddPerson extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange = (event) => {
    if(this.state[event.target.name] !== undefined){
      this.setState({ [event.target.name]: event.target.value })
    }
  }

  handleSubmit = () => {
    const { firstName, lastName } = this.state
    this.props.addPerson(firstName, lastName)
    this.setState({firstName:'', lastName:''})
  }

  render(){
    return <div>
      <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
      <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
      <button className="add" onClick={this.handleSubmit}>Add Person</button>
      <button className="cancel">Go Back</button>
    </div>
  }
}

export default AddPerson