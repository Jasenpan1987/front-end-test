import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Nav } from "./Nav";
import { SearchForm } from "./SearchForm";
import { Books } from "./Books";
import { Loading } from "./ui/Loading";

class AppComponent extends Component {
  render() {
    return (
      <div>
        {this.props.isLoading && <Loading />}
        <Nav />
        <div className="container">
          <SearchForm />
          <Books />
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading
});

export const App = connect(mapStateToProps)(AppComponent);
