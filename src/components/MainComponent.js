import React,{ Component } from 'react';
import Menu from '../components/MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent'; 
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Routes,Route,Navigate} from 'react-router-dom';
import DishDetail from './DishDetailComponent';

import { useParams } from 'react-router-dom';
  

class Main extends Component{
  
  constructor(props) {
    super(props);
    this.state = { 
        dishes: DISHES,
        comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
        selectedDish:null,
    };
  }

  render() {
    const HomePage=()=>{
      return(
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
         />
      )
    }
    
   const DishWithId=()=>{
    const Id = useParams().dishId;
    console.log(Id);
    console.log(this.state.dishes.filter((dish) => dish.id === parseInt(Id) ));
    return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id ===parseInt(Id))[0]} 
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(Id))} />
      
      
    )
  }
  return (
     <div className='container' >
     <Header/>
      <Routes>
        <Route path='/home'
         element={<HomePage/>} />
        
        <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>} />
        <Route path='/menu/:dishId' element={<DishWithId/>} />
        <Route exact path='/contactus' element={<Contact/>}  />
        <Route exact path='/aboutus' element={<About leaders={this.state.leaders}/>}  />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
       <Footer/>
      </div>
    
  );
}
}

export default Main