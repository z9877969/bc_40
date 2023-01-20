import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todo, // [el1, el2, ...]
    filter: "all",
  };

  addTodo = (newTodo) => {
    this.setState((prev) => ({ todo: [...prev.todo, newTodo] }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((el) => el.id !== id),
    }));
  };

  filterTodo = () => {
    const { filter, todo } = this.state;
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredTodo = this.filterTodo();
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <PrioritySelect
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <ToDoList todo={filteredTodo} removeTodo={this.removeTodo} />
      </>
    );
  }
}

export default TodoPage;
