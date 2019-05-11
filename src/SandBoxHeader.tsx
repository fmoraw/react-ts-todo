import React from "react";
import { Link } from "react-router-dom";

interface SandboxHeaderState {

}

export default class SandboxHeader extends React.Component<{},SandboxHeaderState> {

    public render() {
        return(
            <React.Fragment>
     
                <a href="#/0">Next</a>
                <a href="#/1">Previous</a>
                <a href="#/solution">Solution</a>
            </React.Fragment>
        )
    }
}