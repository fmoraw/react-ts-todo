import React from "react";

// Step 1: importiere Hello, Bye und NochNeConst
// Step 2: const mit Komponente Heading erstellen
// Step 3: Button mit onClick-Methode erstellen

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
