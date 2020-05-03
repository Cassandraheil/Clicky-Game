import React, { Component } from 'react';
import card from './card.json'
import CardSetup from './components/cardstyle'
import NavBar from './components/nav/NavBar';
import "./style.css";

class App extends Component {

  //dealing with the score
    state = {
      title: "Adventure Time!",
      score: 0,
      topScore: 0,
      isGameOver: false,
      card //this.shuffle(this.card)
  };

  maxScore = () => {
      if(this.state.score> this.state.topScore){
      this.setState(
                {topScore: this.state.score}
            )
      }
     };

  restart = () => {
    for (var i=0; i<this.state.card.length; i++){
      this.state.card[i].clicked = false;
      this.state.score = 0;
      this.state.title = "Oh No, they've been clicked already! Try again"
    }
    this.setState({
      card,
      score: this.state.score,
      title: this.state.title
    });
  }

  randomize = () => {
    //this should shuffle the cards everytime
    console.log("shuffle le deck!")
  }


  handleClicked = id => {
    console.log(id)

    for (var i=0; i<this.state.card.length; i++){
      if (this.state.card[i].id === id){
        if (this.state.card[i].clicked === true){
          this.restart();
          this.randomize();
        }
        else{
        this.state.card[i].clicked = true;
        this.state.score ++;
        this.state.title ="Adventure Time!";
        this.randomize();
        }
      }
    }
    this.setState({
      card,
      score: this.state.score,
      title: this.state.title
    });
    this.maxScore();
    
  };


  render() {
    return (
      <div>

      <NavBar title={this.state.title} score={this.state.score} topScore={this.state.topScore}></NavBar>
      
      <div className="cards">
      {this.state.card.map(card => (
        <CardSetup 
        handleClicked={this.handleClicked}
        id={card.id}
        image={card.image}
        clicked={card.clicked}
        />
      ))
    }</div>

    </div>
    )
  }
}
export default App;
