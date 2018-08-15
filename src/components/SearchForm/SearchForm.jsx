import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchBooks } from "../../actions/booksActions";
import { SearchInput } from "./SearchInput";

const isNonEmptyString = str => typeof str === "string" && str.length > 0;

class SearchFormComponent extends Component {
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

  handleSubmit = e => {
    e.preventDefault();

    const { title, author, isbn } = this.state;
    let query = {};
    if (isNonEmptyString(title)) {
      query.title = { str: title };
    }
    if (isNonEmptyString(author)) {
      query.author = { str: author };
    }
    if (isNonEmptyString(isbn)) {
      query.isbn = { str: isbn, exact: true };
    }

    this.props.fetchBooks(query);
  };

  render() {
    const fields = ["title", "isbn", "author"];

    return (
      <form onSubmit={this.handleSubmit}>
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

SearchFormComponent.propTypes = {
  fetchBooks: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchBooks: query => dispatch(fetchBooks(query))
});

export const SearchForm = connect(
  undefined,
  mapDispatchToProps
)(SearchFormComponent);
