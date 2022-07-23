import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
    errMess:null,
    isLoading:true,
    comments:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading:false,comments:action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading:false, errMess:action.payload}
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("comment",comment)
            return {...state,comments:state.comments.concat(comment)};

        default:
          return state;
      }
};