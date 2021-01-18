import React from "react";
import LabelInput from "./LabelInput";

class WorkExp extends React.Component {
  constructor(props) {
    super(props);
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
    console.log(index);
    array.splice(index, 1);
    this.setState({ savedData: array });
  }

  mapSavedData() {
    const output = this.state.savedData.map((arrayItem, index) => {
      return (
        <div className={index}>
          <button
            key={index}
            className="delete-button"
            id={index}
            onClick={this.handleDelete}
          >
            X
          </button>
          <div key={index}>{arrayItem.school}</div>
          <div key={index}>{arrayItem.from}</div>
          <div key={index}>{arrayItem.to}</div>
          <div key={index}>{arrayItem.degree}</div>
          <div key={index}>{arrayItem.gpa}</div>
        </div>
      );
    });

    return output;
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <LabelInput
          label="University or School"
          name="school"
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
          label="Degree:"
          name="degree"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <LabelInput
          label="GPA:"
          name="gpa"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save" />
        <input type="button" value="Cancel" onClick={this.handleCancel} />
      </form>
    );
  }

  render() {
    const output = this.state.formVisible ? (
      this.renderForm()
    ) : (
      <button onClick={this.handleOpenForm}>+Add</button>
    );
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
