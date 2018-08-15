import React, { Component } from "react";
import { connect } from "react-redux";

class AppComponent extends Component {
  render() {
    return <div className="container">{this.props.books.foo}</div>;
  }
}

const mapStateToProps = state => ({
  books: state.books
});

const App = connect(mapStateToProps)(AppComponent);

export { App };
