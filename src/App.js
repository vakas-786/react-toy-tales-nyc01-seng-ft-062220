import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => this.setState({toys: toys}))
    
  }

  deleteHandler = (key) => {
    
    
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
    fetch(`http://localhost:3000/toys/${key}`, options)
    .then(response => response.json())
    
    let filterArr = this.state.toys.filter(toys => {
      return toys.id !== key
    })
    this.setState({...this.state.toys, toys: filterArr })
  }

  likesHandler = (toy) => {

    toy.likes +=1 
    this.setState({...this.state, 
    toys: this.state.toys})
    let toyId = toy.id
    
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({likes: toy.likes})
    }
    fetch(`http://localhost:3000/toys/${toyId}`, options) 
    .then(response => response.json())
    

  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

newToys = (toyObj) => {
  let newArr = [...this.state.toys, toyObj]
  console.log(newArr)
  this.setState({...this.state, toys: newArr })
}

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm newToys={this.newToys}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer likesHandler={this.likesHandler} deleteHandler={this.deleteHandler} newToys={this.state.toys}  />
      </>
    );
  }

}

export default App;
