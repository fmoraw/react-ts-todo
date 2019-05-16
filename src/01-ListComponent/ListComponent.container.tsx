import React from "react"
import ListComponent from "./ListComponent";

export default class ListComponentContainer extends React.Component<{}, {}> {

    public render() {
        /* pass the props to the List Component */
        return (
            <ListComponent></ListComponent>
        )
    }
}