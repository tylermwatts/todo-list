import { combineReducers } from "redux";
import { ActionTypes, VisibilityFilters } from "../actions/index";

const { SHOW_ALL } = VisibilityFilters;

const { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER } = ActionTypes;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.todo.id,
          text: action.todo.text,
          createDate: action.todo.createDate,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(t => t.id !== action.id);
    case EDIT_TODO:
      return state.map(t => {
        if (t.id === action.id) {
          t.text = action.text;
        }
        return t;
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const todoApp = combineReducers({
  visibilityFilter,
  todos
});
