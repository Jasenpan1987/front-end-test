import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { fetchBooks } from "../../actions/booksActions";
import { SearchInput } from "./SearchInput";
import { withValidation } from "../../validation/withValidation";

const isNonEmptyString = str => typeof str === "string" && str.length > 0;

class SearchFormComponent extends Component {
  state = {
    title: "",
    isbn: "",
    author: ""
  };

  handleFieldChange = e => {
    if (this.props.reset) {
      this.props.reset();
    }

    this.setState({
      [e.target.dataset.target]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, author, isbn } = this.state;
    let query = {};
    let stateToValidate = {};

    if (isNonEmptyString(title)) {
      query.title = { str: title };
      stateToValidate.title = title;
    }
    if (isNonEmptyString(author)) {
      query.author = { str: author };
      stateToValidate.author = author;
    }
    if (isNonEmptyString(isbn)) {
      query.isbn = { str: isbn, exact: true };
      stateToValidate.isbn = isbn;
    }

    return this.props.validate(
      stateToValidate,
      () => this.props.fetchBooks(query),
      console.log
    );
  };

  render() {
    const fields = ["title", "isbn", "author"];
    const btnDisabled = fields.every(
      field => !isNonEmptyString(this.state[field])
    );
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row py-3">
          {fields.map(fieldName => (
            <SearchInput
              key={fieldName}
              propertyName={fieldName}
              onChange={this.handleFieldChange}
              value={this.state[fieldName]}
              error={this.props.errors && this.props.errors[fieldName]}
            />
          ))}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success float-right"
              disabled={btnDisabled}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SearchFormComponent.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object),
  isValid: PropTypes.bool,
  validate: PropTypes.func,
  reset: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fetchBooks: query => dispatch(fetchBooks(query))
});

const connectFn = connect(
  undefined,
  mapDispatchToProps
);

const validationFns = [
  {
    propName: "title",
    fn: title => title && title.length >= 3,
    msg: "Title must be at least 3 characters"
  },
  {
    propName: "isbn",
    fn: isbn => isbn && /^[a-zA-Z0-9]*$/.test(isbn),
    msg: "ISBN cannot contain special characters"
  }
];

export const SearchForm = compose(
  withValidation(validationFns),
  connectFn
)(SearchFormComponent);
