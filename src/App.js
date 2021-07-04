import './App.css';
import React, {Component} from 'react';

const restaurants = [
  {name: 'Chik-Fil-A'},
  {name: 'Waffle House'},
  {name: 'McDonalds'},
  {name: 'Cafe Zuppina'},
  {name: 'Firehouse'},
  {name: 'IHOP'},
  {name: 'Dunkin'},
  {name: 'Born & Bread'},
  {name: 'Hole in One'},
  {name: 'Olive Garden'}
  ]

const randIndex = Math.floor(Math.random() * restaurants.length);

class App extends React.Component {

  state = {
    showMessage: false,
    place: restaurants[randIndex].name
  }

  onButtonClickHandler = () => {
   this.setState(prevState => {
     return {showMessage:true, place: restaurants[Math.floor(Math.random() * restaurants.length)].name }
   })
  };

  render(){
    return (
      <div className="App">
        <h1>Where The Fuck Should We Eat?</h1>
        {this.state.showMessage && <p>{this.state.place}</p>}
        <button type="button" onClick={this.onButtonClickHandler}>
          PICK SOMETHING FOR ME DAMMIT
        </button>
      </div>
    );
  }
}

export default App;