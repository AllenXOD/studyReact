import React, { Component } from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   render(){
//     let name = 'React';
//     return (
//       <p>Hello { name } </p>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     function getName(user) {
//       return user.firstName + " & " + user.lastName;
//     }
//     let user = {
//       firstName: "React",
//       lastName: "JSX"
//     };
//     return (
//       <p>Hello {getName(user)}</p>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "原始数据"
    }
  }
  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }
  render() {
    function getName(user) {
      return user.firstName + " & " + user.lastName;
    };
    let user = {
      firstName: "React",
      lastName: "JSX"
    };
    function getGreeting(user) {
      if (user) {
        return <p>Hello, {getName(user)}!</p>;
      }
      return <p>Hello, Stranger.</p>;
    }
    return (
      <div>
        <input value={this.state.title} onChange={this.handleChange.bind(this)} />
        <p>{this.state.title}</p>
        <div>
          {getGreeting(user)}
        </div>
      </div>
    )
  }
}
export default App;
