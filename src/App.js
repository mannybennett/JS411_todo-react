import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
  }

  onClickHandler = () => {
    this.state.isClicked ? this.setState({isClicked : false}) : this.setState({isClicked : true})
  }

  onChangeHandler = e => this.setState({text: e.target.value})

  onSubmitHandler = () => {
    this.setState({todos: [...this.state.todos, this.state.text]})
    this.setState({text: ""})
  }

  onDeleteHandler = idx => {
    this.setState({todos: this.state.todos.filter((todo, i) => i !== idx)})
  }

  render() {
    return (
      <div style={{ marginTop: '400px' }} className="App">
        <button type="button" onClick={this.onClickHandler}>
          {this.state.isClicked ? 'Yes' : 'No'}
        </button>
        <input type='text' onChange={this.onChangeHandler}></input>
        <button type='submit' onClick={this.onSubmitHandler}>Submit</button>
        <ol>
          {this.state.todos.map((todo, idx) => {
            return (
              <li key={idx}>
                {todo}
                <button type='button' onClick={() => this.onDeleteHandler(idx)}>Delete</button>
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default App;