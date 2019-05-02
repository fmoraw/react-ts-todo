import React from "react"

interface ListComponentProps {

}

interface ListComponentState {

}

export default class ListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public render() {
        return (
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> 
        )
    }

}


