import mockData from "../mockData";

const todos = (state = [...mockData], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: action.todo.id, text: action.todo.text, completed: false }
      ];
    case "DELETE_TODO":
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default todos;
