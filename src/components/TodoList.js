import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";
import { AddTodo } from "../actions/index";

class TodoList extends Component {
  state = {
    currentText: ""
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

  deleteTodo = todo => {};

  handleChange = e => {
    this.setState({ currentText: e.target.value });
  };

  render() {
    const { todoList } = this.props;
    return (
      <div
        style={{
          width: "100%",
          maxWidth: 360
        }}
      >
        <form onSubmit={this.addTodo}>
          <TextField
            onChange={this.handleChange}
            value={this.state.currentText}
          />
          <Button type="submit">Submit</Button>
        </form>
        <List component="nav">
          {todoList.map((t, i) => {
            return (
              <ListItem key={`List Item ${i}`} button>
                <ListItemText primary={t.text} />
                <ListItemSecondaryAction>
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

const mapStateToProps = state => {
  console.log(state);
  return { todoList: [...state] };
};

export default connect(mapStateToProps)(TodoList);
