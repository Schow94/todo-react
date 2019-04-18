import React, { Component } from 'react';
import Input from './Input';

class AddButton extends Component {
  state = {
    clicked: false
  };

  onClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    const renderAdd = () => {
      if (!this.state.clicked) {
        return (
          <div>
            <h3>Create a New List</h3>
            <a className="btn-floating btn-large waves-effect waves-light red">
              <i onClick={e => this.onClick(e)} className="material-icons">
                add
              </i>
            </a>
          </div>
        );
      }
      //code here is unreachable for some reason
      return (
        <div>
          <Input addTodo={this.props.addTodo} />
        </div>
      );
    };
    console.log('clicked: ' + this.state.clicked);

    return <div>{renderAdd()}</div>;
  }
}

export default AddButton;
