import { NAVIGATE_TO_DETAILS } from "../config/constants";

const initialState = {
  todos: [],
  title : ''
};

export default function detailsReducer(state = initialState, action) {
    // console.log("Action Dta",action);
    switch (action.type) {
      case NAVIGATE_TO_DETAILS:
        return {
          ...state,
          todos: action.todos,
          title : action.title
        };
      default:
        return state;
    }
  }