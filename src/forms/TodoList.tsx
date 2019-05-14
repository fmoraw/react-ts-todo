import React from "react"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import { Todo } from "./types";

// Step 3-1: wrap input into form-Tag with submit (onSubmit is getting handleSubmit)
// Step 3-2: add redux-form component Field with name, type (placeholder)
// Step 3-3: use an own component
// Step 3-4: show validation errors

interface ListComponentProps {
    fetchTodos: () => void,
    setTodoDone: (todo: Todo) => void,
    todos: Todo[]
}

interface ListComponentState {
}

interface ReduxFormField {
    input: any,
    type: any,
    meta: any,
}

export default class TodoListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public componentDidMount() {
        const { fetchTodos } = this.props
        fetchTodos()
    }

    private renderTodos = () => {
        const { todos, setTodoDone } = this.props;
        const options = {
            onRowClick: (todo: Todo) => setTodoDone(todo)
        }
        return (
            <BootstrapTable data={todos} options={options}>
                <TableHeaderColumn dataField="id" isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
            </BootstrapTable>
        )
    }

    public render() {
        return (
            <div>
                Hier soll ein Formular sein
                {this.renderTodos()}
            </div>
        )
    }

}


