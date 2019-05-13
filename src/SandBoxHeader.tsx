import React from "react";
import { Link } from "react-router-dom";

interface SandboxHeaderState {

}

export default class SandboxHeader extends React.Component<{},SandboxHeaderState> {

    public render() {
        return(
            <React.Fragment>
                <a href="#/2">Next</a>
                <a href="#/1">Previous</a>
                <a href="#/solution">Solution</a>
                <a href="#/from0ToReact">Schritt 1: From 0 to React</a>
                <a href="#/backend">Schritt 6: Todos fetchen</a>
                <a href="#/forms">Schritt 8: Formulare mit redux-form</a>
            </React.Fragment>
        )
    }
}