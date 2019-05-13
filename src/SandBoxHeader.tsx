import React from "react";
import { Link } from "react-router-dom";

interface SandboxHeaderState {

}

export default class SandboxHeader extends React.Component<{},SandboxHeaderState> {

    public render() {
        return(
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a href="#/01-React-Component">01-React-Component</a>
                </li>
                <li className="nav-item">
                    <a href="#/01-React-Component-Solution">01-React-Component-Solution</a>
                </li>
                <li className="nav-item">
                    <a href="#/02-Redux-Container">02-Redux-Container</a>
                </li>
                <li className="nav-item">
                <a href="/#02-Redux-Container-Solution">02-Redux-Container-Solution</a>
                </li>
            </ul>
        )
    }
}