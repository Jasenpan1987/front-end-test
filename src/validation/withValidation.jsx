import React, { Component } from "react";

const identityFn = x => x;

const withValidation = validators => InnerComponent => {
  return class Wrapper extends Component {
    state = {
      errors: {}
    };

    reset = () => {
      this.setState({
        errors: {}
      });
    };

    validate = (
      props,
      successCallback = identityFn,
      errorCallback = identityFn
    ) => {
      const newErrors = {};
      this.reset();
      for (let { propName, fn, msg } of validators) {
        if (props[propName] !== undefined && !fn(props[propName])) {
          newErrors[propName] = msg;
        }
      }
      if (Object.keys(newErrors).length === 0) {
        successCallback();
      }

      this.setState(
        {
          errors: { ...newErrors }
        },
        () => {
          errorCallback(this.state.errors);
        }
      );
    };

    render() {
      return (
        <InnerComponent
          errors={this.state.errors}
          validate={this.validate}
          isValid={Object.keys(this.state.errors).length === 0}
          reset={this.reset}
          {...this.props}
        />
      );
    }
  };
};

export { withValidation };
