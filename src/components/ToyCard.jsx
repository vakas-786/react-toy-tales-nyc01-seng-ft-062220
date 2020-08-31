import React, { Component } from 'react';

class ToyCard extends Component {

  deleteId = () => {
    this.props.deleteHandler(this.props.toy.id)
  }

  likeId = () => {
    this.props.likesHandler(this.props.toy)  
  }

  
  render() {
    
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="{this.props.name}"className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={this.likeId}>❤️</button>
        <button className="del-btn" onClick={this.deleteId}>Donate to GoodWill</button>
      </div>
    )
  }

}

export default ToyCard
