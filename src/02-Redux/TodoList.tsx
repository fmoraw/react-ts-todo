import React from "react";
import Parse from "parse";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Todo } from "./types";

interface ListComponentState {
  todos: Todo[];
  todo: Todo;
}

interface ListComponentProps {
  fetchTodos: () => void
  onSubmit: (todo:any) => void
  setTodoDone: (todo: any) => void
}

export default class TodoListComponent extends React.Component<
  ListComponentProps,
  ListComponentState
> {
  constructor(props: ListComponentProps) {
    super(props);
    this.state = {
      todos: [],
      todo: {
        text: "",
        status: "active",
        id: ""
      }
    };
  }

  public componentDidMount() {
    this.props.fetchTodos();
  }

  private createTodo() {
    const Todo = Parse.Object.extend("todo");
    const todo = new Todo();
    todo.set("text", this.state.todo.text);
    todo.set("status", "active");
    this.props.onSubmit(todo)
  }

  private setTodoDone(todo: Todo) {
    const Todo = Parse.Object.extend("todo");
    const todoObject = new Todo();
    todoObject.set("id", todo.id);
    todoObject.set("status", "done");
    this.props.setTodoDone(todoObject)
  }

  public render() {
    const options = {
      onRowClick: (todo: Todo) => this.setTodoDone(todo)
    };
    return (
      <div>
        <form onSubmit={() => this.createTodo()}>
          <React.Fragment>
            <input
              value={this.state.todo.text}
              onChange={event =>
                this.setState({
                  todo: {
                    ...this.state.todo,
                    text: event.target.value
                  }
                })
              }
              type="text"
              className="form-control w-100"
              placeholder="Was ist dein nächstes Todo?"
            />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </React.Fragment>
        </form>
        <BootstrapTable data={this.state.todos} options={options}>
          <TableHeaderColumn dataField="id" isKey>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
