import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import ButtonRender from './components/ButtonRender';
import AddButton from './components/AddButton';

class App extends Component {
  state = {
    todos: [
      { id: '1', input: 'Go to the gym', time: '5:15AM', completed: false },
      { id: '2', input: 'Eat dinner', time: '10:17AM', completed: false },
      { id: '3', input: 'Shower', time: '3:30PM', completed: false },
      { id: '4', input: 'Work at 8AM', time: '4:18AM', completed: false },
      {
        id: '5',
        input: 'Catch up with friends at happy hour',
        time: '9:01PM',
        completed: false
      }
    ]
  };

  //ACTIONS
  //ADD A TODO ITEM
  addTodo = todo => {
    if (!todo.input) {
      return;
    }
    todo.id = Math.random();
    todo.input = todo.input.trim();
    todo.time = new Date().toLocaleTimeString();
    todo.completed = false;
    console.log(todo);

    this.setState({ todos: [...this.state.todos, todo] });
  };

  //DELETE A TODO ITEM - only returns items whose id doesn't match id
  //passed in

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });
  };

  // COMPLETE fxn - figure out exactly what this is doing below
  // not sure why i saved to newTodos variable
  //refer to delete function on why they saved to a variable
  //updating all todo items. Figure out how to pull off based off of id

  completedTodo = id =>
    this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = true;
        console.log(todo);
        return this.setState({ todo: todo });
      }
    });

  //SOMETHING WRONG WITH THIS CODE BELOW
  // completedTodo = id => {
  //   this.state.todos.map(todo => {
  //     if (!todo.completed) {
  //       todo.completed = true;
  //       console.log(todo);
  //     }
  //     return this.setState({ todos: [...this.state.todos, todo] });
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: '#d9dde2',
            padding: '30px',
            marginBottom: '100px'
          }}
        >
          <h1>To Do List</h1>
        </div>
        <AddButton addTodo={this.addTodo}>
          <Input addTodo={this.addTodo} />
        </AddButton>
        <br />
        <List
          className="list-component"
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          completedTodo={this.completedTodo}
        />
        <br />
        <ButtonRender />
      </div>
    );
  }
}

export default App;
