/* Step I:   Create the class ListComponent
 * Step II:  Add the proper types to the ListComponentState interface
 * Step III: Add default props to the container component and add the type to the ListCompoentProps interface
 * Step IV:  Implement the function renderInitialValues that renders the initial values (props)
 * Step V:   Add the renderInitialValues function to the render function
 * 
 * Step VI:  Add an input element and save the input value in the component's state
 * Step VII: Add the input as a new element to the list when a button is clicked
 */

import React from "react"


// The props are passed from the outside
interface ListComponentProps {

}

// The state is internal, the component will re-render itself when the state is updated
interface ListComponentState {

}

// ListComponent
export default class ListComponent extends React.Component<ListComponentProps, ListComponentState> {

    // compinentWillMount will set the state before the component is rendered
    componentWillMount() {
        this.setState({
            input: "",
            todos: []
        })
    }

    // The render function will update what you can see on the screen
    public render() {
        return (
            <div></div>
        )
    }

}


