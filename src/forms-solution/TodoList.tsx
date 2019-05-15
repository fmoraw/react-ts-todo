import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Field } from "redux-form";
import { Todo } from "./types";

interface ListComponentProps {
  handleSubmit: () => void;
  fetchTodos: () => void;
  setTodoDone: (todo: Todo) => void;
  todos: Todo[];
}

interface ListComponentState {}

interface ReduxFormField {
  input: any;
  type: any;
  meta: any;
}

const renderField = ({
  input,
  type,
  meta: { touched, error, warning }
}: ReduxFormField) => (
  <div>
    <input {...input} type={type} className="form-control w-100" />
    {touched &&
      (error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ))}
  </div>
);

export default class TodoListComponent extends React.Component<
  ListComponentProps,
  ListComponentState
> {
  public componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  private renderaAddTodo() {
    return (
      <React.Fragment>
        <Field
          name="text"
          component={renderField}
          type="text"
          placeholder="Was ist dein nächstes Todo?"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </React.Fragment>
    );
  }

  private renderTodos = () => {
    const { todos, setTodoDone } = this.props;
    const options = {
      onRowClick: (todo: Todo) => setTodoDone(todo)
    };
    return (
      <BootstrapTable data={todos} options={options}>
        <TableHeaderColumn dataField="id" isKey>
          ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
      </BootstrapTable>
    );
  };

  public render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>{this.renderaAddTodo()}</form>
        {this.renderTodos()}
      </div>
    );
  }
}
