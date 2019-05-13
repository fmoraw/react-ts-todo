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
                <li className="nav-item">
                    <a href="#/from0ToReact">From0ToReact</a>
                </li>
                <li className="nav-item">
                    <a href="#/from0ToReact-solution">From0ToReact-Solution</a>
                </li>
                <li className="nav-item">
                    <a href="#/forms">Forms</a>
                </li>
                <li className="nav-item">
                    <a href="#/forms-solution">Forms-Solution</a>
                </li>
                <li className="nav-item">
                    <a href="#/backend">Backend</a>
                </li>
                <li className="nav-item">
                    <a href="#/backend-solution">Backend-Solution</a>
                </li>
            </ul>
        )
    }
}