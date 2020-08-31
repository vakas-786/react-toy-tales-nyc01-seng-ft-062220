import React from 'react';
import ToyCard from './ToyCard'
// import { render } from '@testing-library/react';

class ToyContainer extends React.Component {

  // state = {
  //   toys: []
  // }
  
  // componentDidMount() {
  //   fetch('http://localhost:3000/toys')
  //   .then(response => response.json())
  //   .then(toys => this.setState({toys: toys}))
    
  // }
  
  // componentDidUpdate() {
  //   console.log("updated")
    
  //   fetch('http://localhost:3000/toys')
  //   .then(response => response.json())
  //   .then(toys => {
  //     if (this.state.toys.length !== toys.length) {
  //       this.setState({toys: toys})
  //     }
  //   })
  // }
  
  
  render() {
    let ToysIterate = this.props.newToys.map((toyObj) => <ToyCard key={toyObj.id} name={toyObj.name} toy={toyObj} image={toyObj.image} likes={toyObj.likes} deleteHandler={this.props.deleteHandler} likesHandler={this.props.likesHandler}/> )
    
    console.log(this.props.newToys)
   
    return(
      
      <div id="toy-collection">
       
        {ToysIterate}
        
      </div>
      
    )
  }
}

export default ToyContainer
