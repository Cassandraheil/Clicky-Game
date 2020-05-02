import React from 'react';
import NavBar from './NavBar';
// import GameLogic from './GameLogic';

class Container extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        isGameOver: false
    };

    maxScore = (scores) => {
        var topScore = Math.max(scores)
        this.setState(
            {topScore: topScore}
        )
        return topScore
    };

    render(){
        
 return (
     <div>
     <NavBar score={this.state.score} topScore={this.state.topScore}></NavBar>
     {/* import gamelogic but rename it here */}
     </div>
    
    )
 }
    
    

};

export default Container;