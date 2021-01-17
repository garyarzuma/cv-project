import React from "react";
import LabelInput from "./LabelInput";

class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formVisible: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log("States:" + this.state.school);
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
    return (
      <div className="work-exp">
        <h2>Work Experience</h2>
        {output}
      </div>
    );
  }
}

export default WorkExp;
