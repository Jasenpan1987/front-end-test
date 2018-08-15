import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SearchInput } from "./SearchInput";

class SearchForm extends Component {
  state = {
    title: "",
    isbn: "",
    author: ""
  };

  handleFieldChange = e => {
    this.setState({
      [e.target.dataset.target]: e.target.value
    });
  };
  render() {
    const fields = ["title", "isbn", "author"];

    return (
      <form>
        <div className="row py-3">
          {fields.map(fieldName => (
            <SearchInput
              key={fieldName}
              propertyName={fieldName}
              onChange={this.handleFieldChange}
              value={this.state[fieldName]}
            />
          ))}
          <div className="col-12">
            <button type="submit" className="btn btn-success float-right">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export { SearchForm };
