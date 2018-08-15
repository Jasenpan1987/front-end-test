import React from "react";
import PropTypes from "prop-types";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

const Table = ({ className = "table table-striped", titles, data }) => {
  console.log(data);
  return (
    <table className={className}>
      <TableHead titles={titles} />
      <TableBody data={data} />
    </table>
  );
};

Table.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.instanceOf(Object).isRequired
};

export { Table };
