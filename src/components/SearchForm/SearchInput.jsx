import React from "react";
import PropTypes from "prop-types";

const SearchInputComponent = ({
  propertyName,
  onChange,
  value,
  label = propertyName
}) => (
  <div className="col">
    <div className="form-group">
      <label htmlFor={propertyName}>{label}</label>
      <input
        className="form-control"
        type="text"
        id={propertyName}
        name={propertyName}
        value={value}
        onChange={onChange}
        data-target={propertyName}
      />
    </div>
  </div>
);

SearchInputComponent.propTypes = {
  propertyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

export const SearchInput = SearchInputComponent;
