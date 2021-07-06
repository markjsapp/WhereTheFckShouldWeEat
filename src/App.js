import './App.css';
import React from 'react';
import Footer from './components/footer';
import {Card, ListGroup} from 'react-bootstrap';
import Maps from './components/map';

// Temp data 
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

// Calculating a random index 
const randIndex = Math.floor(Math.random() * restaurants.length);

// Main 
class App extends React.Component {

  // Default state doesn't show a restaurant
  state = {
    showMessage: false,
    place: restaurants[randIndex].name
  }

  // Clicking the button enables the restaurant
  onButtonClickHandler = () => {
   this.setState(prevState => {
     return {
      showMessage:true, 
      place: restaurants[Math.floor(Math.random() * restaurants.length)].name 
    }
   })
  };

  render(){
    return (
      <div className="App">
        <h1>Where The Fuck Should We Eat?</h1>
        {this.state.showMessage && 
          <p>{this.state.place}
            <Card style={{ 
              textAlign: "center", 
              paddingLeft: "115px", 
              paddingRight: "115px",
              }}>
              <Card.Header style={{ 
                fontSize: "30px",
                color: "grey"
              }}>Hours</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ fontSize: "30px", color: "grey"}}>Monday: 8:00am - 10:00pm </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "grey"}}>Tuesday: 8:00am - 10:00pm </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "grey"}}>Wednesday: 8:00am - 10:00pm </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "grey"}}>Thursday: 8:00am - 10:00pm</ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "grey"}}>Friday: 8:00am - 10:00pm</ListGroup.Item>
              </ListGroup>
            </Card>
          </p>
        }
        <button type="button" onClick={this.onButtonClickHandler} style={{margintop: "50px"}}>
          PICK SOMETHING FOR ME DAMMIT
        </button>
        <Footer>
          <span>
            <a href="https://www.buymeacoffee.com/markjsapp">Donate </a> | 
            <a href="https://github.com/markjsapp">Github</a> 
          </span>
        </Footer>
      </div>
    );
  }
}

export default App;