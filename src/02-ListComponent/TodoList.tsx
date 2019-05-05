import React from "react"
import { Link } from "react-router-dom";

interface ListComponentProps {
    fetchTodos: () => void,
}

interface ListComponentState {

}

export default class TodoListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public componentDidMount() {
        const { fetchTodos } = this.props;
        fetchTodos()
    }

    public render() {
        return (
            <ul>
                <li><Link to="/">Coffe</Link></li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> 
        )
    }

}


