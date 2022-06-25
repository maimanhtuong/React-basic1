import React,{ Component } from 'react';
import Menu from '../components/MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Routes,Route,Navigate} from 'react-router-dom';
  

class Main extends Component{
  constructor() {
    super();
    this.state = { 
        dishes: DISHES,
        comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
        selectedDish:null,
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId})
  }
  render() {
  return (
     <div className='container' >
     <Header/>
      <Routes>
        <Route path='/'
         element={<Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
         />} />
        <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>} />
        <Route exact path='/contactus' element={<Contact/>}  />
      </Routes>
       <Footer/>
      </div>
    
  );
}
}

export default Main