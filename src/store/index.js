import { createStore } from "redux";
import { VisibilityFilters } from "../actions/index";
import mockData from "../mockData";
import { todoApp } from "../reducers/index";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : { todos: [...mockData], visibilityFilter: VisibilityFilters.SHOW_ALL };

export const store = createStore(todoApp, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
