import React, { Component } from "react";

export default class Tester extends Component {
  static defaultProps = {
    id: "1"
  };

  componentDidMount() {
    console.log("Lifecycle works: Teaser did mount");
  }

  render() {
    const { id } = this.props;
    return (
        <div>
            Hello im tester #{id}
            <button onClick={() => {
                window.alert(`Hello $${id}`);
            }}>Click</button>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </div>
    );
  };
}