import React from "react"
import Parse from "parse"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import { Todo } from "./types";
import { todoReducer } from "../forms/todoreducer";

interface ListComponentState {
    todos: Todo[]
    todo: Todo
}

interface ListComponentProps {
}

// Step 1: Initialize Parse
// Step 2: todos fetchen mit find
// Step 3: todo erstellen
// Step 4: todo bearbeiten

export default class TodoListComponent extends React.Component<ListComponentProps, ListComponentState> {

    constructor(props: ListComponentProps) {
        super(props);
        this.state = {
            todos: [],
            todo: {
                text: '',
                status: 'active',
                id: '',
            }
        }
    }

    public componentDidMount() {
        this.fetchTodos()
    }

    private converParseTodosToObject(todos: any) {
        return todos.map((todo: any) => ({
            id: todo.id,
            status: todo.get('status'),
            text: todo.get('text'),
        }))
    }

    private fetchTodos() {
        const Todo = Parse.Object.extend('todo');
        const query = new Parse.Query(Todo);
        query.equalTo("status", "active");
        query.find().then(result => 
            this.setState({ todos: this.converParseTodosToObject(result)}));
    }

    private createTodo() {
        const Todo = Parse.Object.extend('todo');
        const todo = new Todo();
        todo.set('text', this.state.todo.text);
        todo.set('status', 'active');
        todo.save().then(() => this.fetchTodos());
    }

    private setTodoDone(todo: Todo) {
        const Todo = Parse.Object.extend('todo');
        const todoObject = new Todo();
        todoObject.set('id', todo.id);
        todoObject.set('status', 'done');
        todoObject.save().then(() => this.fetchTodos())
    }

    public render() {
        const options = {
            onRowClick: (todo: Todo) => this.setTodoDone(todo)
        }
        return (
            <div>
                <form onSubmit={() => this.createTodo()}> 
                    <React.Fragment>
                        <input
                            value={this.state.todo.text}
                            onChange={event => this.setState({
                                todo: {
                                    ...this.state.todo,
                                    text: event.target.value,
                                }
                            })}
                            type="text"
                            className="form-control w-100"
                            placeholder="Was ist dein nächstes Todo?"
                        />
                        <button className="btn btn-primary" type="submit">Add</button>
                    </React.Fragment>
                </form>
                <BootstrapTable data={this.state.todos} options={options}>
                    <TableHeaderColumn dataField="id" isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}


