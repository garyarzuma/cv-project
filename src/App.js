import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import Skills from "./components/Skills";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workMode: true,
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({
      workMode: !this.state.workMode,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.changeMode}>Workmode</button>
        <div className="Resume">
          <PersonalInfo />
          <WorkExp workMode={this.state.workMode} />
          <Education workMode={this.state.workMode} />
          <Skills workMode={this.state.workMode} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
