import React from "react";
import PropTypes from "prop-types";

const SearchInputComponent = ({
  propertyName,
  onChange,
  value,
  label = propertyName,
  error
}) => (
  <div className="col">
    <div className="form-group">
      <label htmlFor={propertyName}>{label}</label>
      <input
        className={`form-control ${error && "is-invalid"}`}
        type="text"
        id={propertyName}
        name={propertyName}
        value={value}
        onChange={onChange}
        data-target={propertyName}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  </div>
);

SearchInputComponent.propTypes = {
  propertyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string
};

export const SearchInput = SearchInputComponent;
