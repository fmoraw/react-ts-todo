import React, { ChangeEvent } from "react"
import { Link } from "react-router-dom";
import { Field } from "redux-form"
import { Todo } from "../types";

interface ListComponentProps {
    handleSubmit: () => void,
    fetchTodos: () => void,
    todos: Todo[]
}

interface ListComponentState {
    todoInput: string
}

export default class TodoListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public componentDidMount() {
        const { fetchTodos } = this.props;
        fetchTodos()
    }

    private renderaAddTodo() {
        return (
            <React.Fragment>
                <Field
                    className="form-control"
                    name="text"
                    component="input"
                    type="text"
                    placeholder="Was ist dein nächstes Todo?"
                />
                <button className="btn btn-primary" type="submit">Add</button>
            </React.Fragment>
        )
    }

    private renderTodos = () => {
        return this.props.todos.map((todo) => (<li key={todo.id}>{todo.text}</li>))
    }

    public render() {
        const { handleSubmit } = this.props;
        return (
            <div>
            <form className="form-inline" onSubmit={handleSubmit}> 
                {this.renderaAddTodo()}
            </form>
                <ul>
                    {this.renderTodos()}
                </ul> 
            </div>
        )
    }

}


