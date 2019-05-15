import React from "react";

interface ListComponentProps {}

interface ListComponentState {}

class MyFirstComponent extends React.Component<
  ListComponentProps,
  ListComponentState
> {
  // The render function will update what you can see on the screen
  public render() {
    return <div />;
  }
}

export default MyFirstComponent;
