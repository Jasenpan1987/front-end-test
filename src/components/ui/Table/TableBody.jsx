import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ data }) => {
  console.log(data);
  return (
    <tbody>
      {Object.keys(data).map(propName => (
        <tr key={propName}>
          {Object.keys(data[propName]).map(k => (
            <td key={k}>{data[propName][k]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export { TableBody };
