import React, { ChangeEvent } from "react"
import { Link } from "react-router-dom";
import { Todo } from "../types";

interface ListComponentProps {
    fetchTodos: () => void,
    addTodo: (todo: Todo) => void,
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

    private handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({todoInput: event.target.value})
    }
    
    private handleOnClick(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault()
        this.props.addTodo({
            id: "",
            text: this.state.todoInput,
            status: "active"
        })
    }

    private renderaAddTodo() {
        return (
            <React.Fragment>
                <input className="form-control" onChange={(event) => this.handleChange(event)}/>
                <button className="btn btn-primary" onClick={this.handleOnClick.bind(this)}>Add</button>
            </React.Fragment>
        )
    }

    private renderTodos = () => {
        return this.props.todos.map((todo) => (<li key={todo.id}>{todo.text}</li>))
    }

    public render() {
        return (
            <div>
            <form className="form-inline">
                {this.renderaAddTodo()}
            </form>
                <ul>
                    {this.renderTodos()}
                </ul> 
            </div>
        )
    }

}


