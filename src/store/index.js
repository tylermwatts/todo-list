import { createStore } from "redux";
import todos from "../reducers/index";

export const store = createStore(todos);
