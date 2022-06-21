import './App.css';
import Menu from './components/MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = { dishes: DISHES };
  }

  render() {
  return (
     <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristore Con Fusoin</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes}></Menu>
      </div>
    
  );
}
}

export default App;