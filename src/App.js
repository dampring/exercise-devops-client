import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

class App extends Component {
  state = {
    loading: true,
    success: false,
    failure: false,
    payload: null,
  };

  componentDidMount() {
    this.getPayload();
  }

  getPayload() {
    this.setState({
      loading: true,
      success: false,
      failure: false,
      payload: null,
    });

    axios
      .get(`${apiUrl}/`)
      .then((response) =>
        this.setState({
          loading: false,
          success: true,
          payload: response,
        })
      )
      .catch((response) =>
        this.setState({
          loading: false,
          failure: true,
          payload: response,
        })
      );
  }

  render() {
    const { loading, success, failure, payload } = this.state;

    const classNameList = [];

    if (success) {
      classNameList.push('success');
    }

    if (failure) {
      classNameList.push('failure');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Client</h1>
        </header>
        <pre className={classNameList.join(' ')}>
          {loading && 'Loading...'}
          {success && 'Success\n\n'}
          {failure && 'Failure\n\n'}
          {payload && JSON.stringify(payload, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
