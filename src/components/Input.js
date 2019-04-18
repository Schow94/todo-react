import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  state = {
    input: ''
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addTodo(this.state);

    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="input">
        <label style={{ fontSize: 30 }}>Add a New Item</label>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={e => this.onChange(e)}
          />
          <br />
          <div>
            <button
              className="btn btn-large waves-effect waves-light submit"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
