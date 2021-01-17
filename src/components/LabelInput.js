import React from "react";

class LabelInput extends React.Component {
  render() {
    return (
      <label>
        {this.props.label}
        <input
          type="text"
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default LabelInput;
