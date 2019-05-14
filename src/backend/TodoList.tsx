import React from "react"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import { Todo } from "./types";

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

const createTodo = (todo: Todo) => {console.log('create a todo')};
const fetchTodos = () => {console.log('fetch todos')};
const setTodoDone = (todo: Todo) => {console.log('set todo status to done')};

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
        fetchTodos()
    }

    public render() {
        const options = {
            onRowClick: (todo: Todo) => setTodoDone(todo)
        }
        return (
            <div>
                <form onSubmit={() => createTodo(this.state.todo)}> 
                    <React.Fragment>
                        <input
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


