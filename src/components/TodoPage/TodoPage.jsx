import { Component, PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: [],
    filter: "all",
    theme: null,
  };

  static getDerivedStateFromProps(newProps, state) {
    console.log("gDSFP", newProps);
    console.log("this :>> ", this);
    return { theme: newProps.theme };
  }

  componentDidMount() {
    console.log("CDM");
    // fetch
    // window.addEventListener("keydown")
    // setInterval
    const todo = JSON.parse(localStorage.getItem("todo")) ?? [];
    this.setState({ todo: todo });
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("newProps :>> ", newProps);
  //   console.log("newState :>> ", newState);
  //   if (
  //     newProps.theme === this.props.theme &&
  //     newState.todo === this.state.todo &&
  //     newState.filter === this.state.filter &&
  //     newState.theme === this.state.theme
  //   )
  //     return false;

  //   return true; // false
  // }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // this.setState({ filter: "all" });
    console.log("snapshot :>> ", snapshot);
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
  }

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
    console.log("Render");
    const filteredTodo = this.filterTodo();

    // this.setState({ filter: "all" }); не можна!!!
    return (
      <div
        style={{
          backgroundColor: this.state.theme === "dark" ? "blue" : "yellow",
        }}
      >
        <ToDoForm addTodo={this.addTodo} />
        <PrioritySelect
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <ToDoList todo={filteredTodo} removeTodo={this.removeTodo} />
        <button
          onClick={() =>
            this.setState((prev) => ({
              todo: [
                ...prev.todo,
                ...prev.todo
                  .slice(0, 12)
                  .map((el) => ({ ...el, id: uuidv4() })),
              ],
            }))
          }
        >
          Show More
        </button>
      </div>
    );
  }
}

export default TodoPage;
