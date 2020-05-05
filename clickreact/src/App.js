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
      card
  };

  maxScore = () => {
      if(this.state.score> this.state.topScore){
      this.setState(
                {topScore: this.state.score}
            )
      }
     };

  restart = () => {
    for (var i=0; i< this.state.card.length; i++){
      this.state.card[i].clicked = false;
    }
    this.state.score = 0;
    this.state.title = "Oh No, they've been clicked already! Try again";
    console.log("title", this.state.title) //console.logs but doesn't display// it did before idk what changed
    this.setState({
      card,
      score: this.state.score,
      title: this.state.title
    });
  }


  shuffle = (arr) => {
      var a,
          j,
          temp;
      // for (a = this.state.card.length; a > 0; a--) {
        for (a=0; a<this.state.card.length; a++){
          j = Math.floor(Math.random() * (a - 1));
          temp = arr[a];
          arr[a] = arr[j];
          arr[j] = temp;
      }
      return arr;    
  };
  


  handleClicked = id => {
    console.log(id)
    console.log(this.state.card)

    for (var i=0; i<this.state.card.length; i++){
      
      if (this.state.card[i] && this.state.card[i].id === id){
        if (this.state.card[i].clicked === true){
          console.log("was already clicked")
          this.restart();
          // this.shuffle(card);
        }
        else{
          this.state.card[i].clicked = true
         
          this.state.score++
        
        // this.shuffle(card);
        }
      }
    }
    this.setState({
      card,
      score: this.state.score,
      title: "Adventure Time!"
    });
    this.maxScore();
    
  };


  render() {
    return (
      <div>

      <NavBar title={this.state.title} score={this.state.score} topScore={this.state.topScore}></NavBar>
      
      <div className="cards">
     {this.state.card.map(card => 
      (
        <CardSetup 
        key={"card" + card.id}
        handleClicked={this.handleClicked}
        id={card.id}
        image={card.image}
        clicked={card.clicked}
        />
      ))
      }
      </div>

    </div>
    )
  };
};

export default App;
