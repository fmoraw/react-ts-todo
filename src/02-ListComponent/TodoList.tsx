import React from "react"
import { Link } from "react-router-dom";

interface ListComponentProps {
    handleMount?: () => void,
}

interface ListComponentState {

}

export default class TodoListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public componentDidMount() {
        const { handleMount } = this.props;
        if(handleMount) {
            handleMount();
        }
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


