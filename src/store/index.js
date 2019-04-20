import { createStore } from "react-redux";
import todos from "../reducers/index";

export const store = createStore(todos);
