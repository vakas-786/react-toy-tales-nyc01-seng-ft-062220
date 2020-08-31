import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: "",
    likes: 0
  }

  changeHandler = (event) => {
    
    this.setState({[event.target.name]: event.target.value })
  }


  submitHandler = (event) => {
    event.preventDefault()
    this.setState(this.state)
    fetch('http://localhost:3000/toys', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(toyObj => {
      this.props.newToys(toyObj)
    })
  }



  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.changeHandler}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.changeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    )
  }

}

export default ToyForm;
