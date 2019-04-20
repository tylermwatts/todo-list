export const AddTodo = todo => {
  return { type: "ADD_TODO", todo };
};

export const EditTodo = id => {
  return { type: "EDIT_TODO", id };
};

export const DeleteTodo = id => {
  return { type: "DELETE_TODO", id };
};

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO"
};
