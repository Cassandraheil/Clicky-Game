import React, { Component } from 'react';
import card from './card.json'
import CardSetup from './components/cardstyle'
import NavBar from './components/NavBar';

class App extends Component {

  //dealing with the score
    state = {
      score: 0,
      topScore: 0,
      isGameOver: false,
      card
  };

  maxScore = () => {
      if(this.state.score> this.state.topScore){
      this.setState(
                {topScore: this.state.score}
            )
      }
     };


  handleClicked = id => {
    console.log(id)

    for (var i=0; i<this.state.card.length; i++){
      if (this.state.card[i].id === id){
        if (this.state.card[i].clicked === true){
          console.log("game over")
          
        }
        else{
        this.state.card[i].clicked = true;
        this.state.score ++;
        }
      }
    }
    this.setState({
      card,
      score: this.state.score
    });
    this.maxScore();
    
  };


  render() {
    return (
      <div>
      <NavBar score={this.state.score} topScore={this.state.topScore}></NavBar>

      {this.state.card.map(card => (
        <CardSetup 
        handleClicked={this.handleClicked}
        id={card.id}
        image={card.image}
        clicked={card.clicked}
        />
      ))
    }

    </div>
    )
  }
}
export default App;
