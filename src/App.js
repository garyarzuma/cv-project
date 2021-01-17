import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Resume">
          <PersonalInfo />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
