import React, { Component } from "react";

class PageWrapper extends Component {
  componentDidMount() {
    this.props.startingAnimation();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.pageNumber !== nextProps.pageNumber) {
      setTimeout(() => {
        this.props.startingAnimation();
      }, 250);
      return true;
    }
    return false;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default PageWrapper;
