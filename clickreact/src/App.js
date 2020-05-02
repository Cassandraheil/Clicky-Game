import React, { Component } from 'react';
import Container from './components/Container';
import card from './card.json'
import CardSetup from './components/cardstyle/CardSetup'

class App extends Component {

  state = {
    card
  };

  clicked = id => {
    //set card.clicked = true
    // then recall the card state
    console.log("was clicked")
  };


  render() {
    return (
      <div>
      <Container />

      {this.state.card.map(card => (
        <CardSetup 
        clicked={this.clicked}
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
