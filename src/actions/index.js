export const AddTodo = todo => {
  return { type: "ADD_TODO", todo };
};

export const EditTodo = (text, id) => {
  return { type: "EDIT_TODO", text, id };
};

export const DeleteTodo = id => {
  return { type: "DELETE_TODO", id };
};

export const SetVisibilityFilter = filter => {
  return { type: "SET_VISIBILITY_FILTER", filter };
};

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
