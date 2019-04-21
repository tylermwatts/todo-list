import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";
import { AddTodo, DeleteTodo, EditTodo } from "../actions/index";

class TodoList extends Component {
  state = {
    currentText: "",
    editing: false,
    editingId: null
  };

  addTodo = e => {
    e.preventDefault();
    const todo = {
      id: uuidv1(),
      text: this.state.currentText,
      createDate: new Date()
    };
    this.props.dispatch(AddTodo(todo));
    this.setState({ currentText: "" });
  };

  deleteTodo = id => {
    this.props.dispatch(DeleteTodo(id));
  };

  editTodo = (text, id) => {
    this.setState({
      currentText: text,
      editing: true,
      editingId: id
    });
  };

  saveEdit = e => {
    e.preventDefault();
    const { currentText, editingId } = this.state;
    this.props.dispatch(EditTodo(currentText, editingId));
    this.resetState();
  };

  resetState = () => {
    this.setState({ currentText: "", editing: false, editingId: null });
  };

  handleChange = e => {
    this.setState({ currentText: e.target.value });
  };

  render() {
    const { todos } = this.props;
    return (
      <div
        style={{
          width: "100%",
          maxWidth: 360
        }}
      >
        <div>
          <TextField
            onChange={this.handleChange}
            value={this.state.currentText}
          />
          {!this.state.editing ? (
            <Button onClick={this.addTodo}>Submit</Button>
          ) : (
            <Button onClick={this.saveEdit}>Save Changes</Button>
          )}
        </div>
        <List component="nav">
          {todos.map((t, i) => {
            return (
              <ListItem key={`List Item ${i}`} button>
                <ListItemText primary={t.text} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => this.editTodo(t.text, t.id)}
                    aria-label="Edit"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => this.deleteTodo(t.id)}
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos, visibilityFilter: state.visibilityFilter };
};

export default connect(mapStateToProps)(TodoList);
