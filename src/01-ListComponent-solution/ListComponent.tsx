import React from "react"

interface ListComponentProps {
    initialValues: Array<String>
}

interface ListComponentState {
    input: string
    todos: Array<String>
}

export default class ListComponent extends React.Component<ListComponentProps, ListComponentState> {

    componentWillMount() {
        this.setState({
            input: "",
            todos: []
        })
    }

    public renderInitialValues = () => {
        return this.props.initialValues.map((text) => <li>{text}</li>)
    }

    public handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            input: event.currentTarget.value
        })
    }

    public handleClick = () => {
        const newTodos = Array.from(this.state.todos)
        newTodos.push(this.state.input)
        this.setState({
            todos: newTodos
         })
    }

    public renderItemsFromState = () => {
        return this.state.todos.map(todo => <li>{todo}</li>)
    }

    public render() {
        return (
            <div>
                <input className="form-control" onChange={this.handelChange}/>
                <button className="btn btn-primary" onClick={this.handleClick}>add</button>
                <ul>
                    {this.renderInitialValues()}
                    {this.renderItemsFromState()}
                </ul> 
            </div>
        )
    }

}


