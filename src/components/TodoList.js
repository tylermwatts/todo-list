import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import React, { Component } from "react";
import { AddTodo, DeleteTodo, EditTodo } from "../actions/index";
import * as mockList from "../mockData";

class TodoList extends Component {
  state = {
    todoList: []
  };

  componentDidMount() {
    this.setState({ todoList: [...mockList.default] });
  }

  addTodo = todo => {
    AddTodo(todo);
  };

  editTodo = todo => {
    EditTodo(todo.id);
  };

  deleteTodo = todo => {
    DeleteTodo(todo.id);
  };

  render() {
    const { todoList } = this.state;
    return (
      <div
        style={{
          width: "100%",
          maxWidth: 360
        }}
      >
        <form onSubmit={this.addTodo}>
          <TextField />
          <br />
          <Button variant="contained" type="submit">
            Add "To Do"
          </Button>
        </form>
        <List component="nav">
          {todoList.map((t, i) => {
            return (
              <ListItem key={`List Item ${i}`} button>
                <ListItemText primary={t.text} />
                <ListItemSecondaryAction>
                  <IconButton onClick={this.editTodo} aria-label="Edit">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={this.deleteTodo} aria-label="Delete">
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

export default TodoList;
