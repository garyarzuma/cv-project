import React from "react";
import LabelInput from "./LabelInput";

class WorkExp extends React.Component {
  constructor() {
    super();
    this.state = { formVisible: false, currentData: {}, savedData: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      currentData: {
        ...this.state.currentData,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    this.setState({
      formVisible: false,
      savedData: [...this.state.savedData, this.state.currentData],
      currentData: {},
    });
    event.preventDefault();
  }

  handleCancel(event) {
    this.setState({
      formVisible: false,
    });
  }

  handleOpenForm(event) {
    this.setState({
      formVisible: true,
    });
  }

  handleDelete(event) {
    const array = [...this.state.savedData];
    const index = event.target.id;
    array.splice(index, 1);
    this.setState({ savedData: array });
  }

  mapSavedData() {
    const output = this.state.savedData.map((arrayItem, index) => {
      const delButton =
        this.props.workMode === true ? (
          <button
            key={index}
            className="delete-button"
            id={index}
            onClick={this.handleDelete}
          >
            X
          </button>
        ) : (
          ""
        );
      return (
        <div className={index}>
          {delButton}
          <div key={arrayItem.company}>{arrayItem.company}</div>
          <div key={arrayItem.from}>{arrayItem.from}</div>
          <div key={arrayItem.to}>{arrayItem.to}</div>
          <div key={arrayItem.city}>{arrayItem.city}</div>
          <div key={arrayItem.role}>{arrayItem.role}</div>
          <div key={arrayItem.description}>{arrayItem.description}</div>
        </div>
      );
    });

    return output;
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <LabelInput
          label="Company Name"
          name="company"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <LabelInput
          label="City"
          name="city"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <LabelInput
          label="From:"
          name="from"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <LabelInput
          label="To:"
          name="to"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <LabelInput
          label="Role:"
          name="role"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <label>
          Description
          <textarea
            type="text"
            value={this.state.text}
            name="description"
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" value="Save" />
        <input type="button" value="Cancel" onClick={this.handleCancel} />
      </form>
    );
  }

  render() {
    let output = "";
    if (this.props.workMode === true) {
      output = this.state.formVisible ? (
        this.renderForm()
      ) : (
        <button onClick={this.handleOpenForm}>+Add</button>
      );
    }
    const savedData = this.mapSavedData();
    return (
      <div className="work-exp">
        <h2>Work Experience</h2>
        {savedData}
        {output}
      </div>
    );
  }
}

export default WorkExp;
