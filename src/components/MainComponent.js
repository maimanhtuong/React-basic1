import React,{ Component } from 'react';
import Menu from '../components/MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutUsComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { Routes,Route, useLocation,useNavigate,useParams} from 'react-router-dom';
import { actions } from 'react-redux-form'  
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
const mapStateToProps = state =>{
  return {
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}
const mapDispatchToProps = (dispatch) => ({
  addComment:(dishId, rating,author, comment) => dispatch(addComment(dishId, rating,author, comment)),
  fetchDishes:() => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset(('feedback')))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
})

class Main extends Component{
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };
  return (
     <div className='container' >
     <Header/>
      <Routes>
        {/* <Route path='/'
         element={<Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
         />} />
        <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>} />
        <Route exact path='/contactus' element={<Contact/>}  /> */}
        <Route index element={<HomePage/>}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/menu' element={<Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route path='/contactus' element={<Contact  resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route path='/aboutus' element={<About leaders={this.props.leaders} />} />
        
      </Routes>
       <Footer/>
      </div>
    
  );
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))