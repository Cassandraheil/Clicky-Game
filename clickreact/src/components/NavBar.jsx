import React from "react";


function NavBar(props) {
  return (
    <nav class="navbar navbar-inverse navbar-fixed-top jumbotron">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >Clicky Game!!</a>
    </div>
    <ul class="nav navbar-nav">
  <li>Score: {props.score}</li>
  <li>Top Score: {props.topScore}</li>
    </ul>
  </div>
</nav>
  );
}

export default NavBar;