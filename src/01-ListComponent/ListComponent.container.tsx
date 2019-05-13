import React from "react"
import ListComponent from "./ListComponent";

export default class ListComponentContainer extends React.Component<{}, {}> {

    public render() {
        return (
            <ListComponent initialValues={["Cake", "Cream"]}></ListComponent>
        )
    }
}