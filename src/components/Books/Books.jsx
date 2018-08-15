import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/booksActions";
import { Table } from "../ui/Table";

class BooksComponent extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderTableHead = titles => {
    return (
      <thead>
        <tr>
          {titles.map(title => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
    );
  };
  render() {
    return (
      <React.Fragment>
        <h3>Book Table</h3>
        <Table
          titles={["ISBN", "Title", "Author", "Pages"]}
          data={this.props.books}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export const Books = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksComponent);
