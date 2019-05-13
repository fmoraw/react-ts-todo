/* Step I: Create the class ListComponent
 * Step II: Add the render function
 * Step III: Add default props to
 * 
 * 
 * 
 */
import React from "react"

interface ListComponentProps {
    initialValues: Array<String>
}

interface ListComponentState {
    input: string
}

export default class ListComponent extends React.Component<ListComponentProps, ListComponentState> {

    public renderInitialValues = () => {
        return this.props.initialValues.map((text) => {
            return <li>{text}</li>
        })
    }

    public render() {
        return (
            <ul>
                {this.renderInitialValues()}
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> 
        )
    }

}


