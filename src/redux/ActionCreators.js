import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


//DISHES
// export const fetchDishes = () => (dispatch) =>{
//     dispatch(dishesLoading(true))
//     return  fetch(baseUrl + 'dishes')
//             .then(res => res.json())
//             .then(dishes => dispatch(addDishes(dishes)))
// }
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // setTimeout(()=>{
    //     dispatch(addDishes(DISHES));
    // },2000);
    return fetch(baseUrl +'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) =>({
    typye: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


//COMMENTS
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) =>({
    typye: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

//PROMOTIONS
export const fetchPromos = () =>(dispatch) =>{
    dispatch(promotionsLoading(true))
    
    return fetch(baseUrl + 'promotions')
            .then(res => res.json())
            .then(promos => dispatch(addPromotions(promos)))
}


export const promotionsLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
})

export const promotionsFailed = (errmess) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addPromotions = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})