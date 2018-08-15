import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ titles }) => (
  <thead>
    <tr>
      {titles.map(title => (
        <th key={title}>{title}</th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export { TableHead };
