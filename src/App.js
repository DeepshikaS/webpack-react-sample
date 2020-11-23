import React, {  Component } from "react";
import "./App.css";

class App extends Component{
  state = {
    loading: true,
    person: null
  }
  async componentDidMount() {

    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });

  }

  render() {

    return (
    <div className="App">
      { this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div className="person">
            <p >Random Person from API</p>
            <div >Title: { this.state.person.name.title }</div>
            <div >First: { this.state.person.name.first }</div>
            <div>Last: { this.state.person.name.last }</div>
            <img src={ this.state.person.picture.large } />
          </div>
          )}
    </div>
    );
  }
}


export default App;
