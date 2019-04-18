import React from 'react';
import './List.css';

//destructure todos off of state which was passed down as a prop
const List = ({ todos, deleteTodo, completedTodo }) => {
  console.log(todos);

  //if there are items in list, map through list
  //if no items in list, return a msg "finished todo list"
  const todoList = todos.length ? (
    todos.map(todo => {
      const completion = todo.completed;

      // if(todos.indexOf(todo) % 2 = 1){
      //   array = even;
      //   return array;
      // } else{
      //   array = odd;
      //   return array;
      // }
      //add className to create dif colored divs that alternate every item

      return (
        <div className="item block" key={todo.id}>
          <div className={`${completion}`}>
            <b>{todo.input}</b>-<em>{todo.time}</em>
            <span className="buttons">
              <span className="button" onClick={() => deleteTodo(todo.id)}>
                <a className="btn-floating btn-small waves-effect waves-light red">
                  <i className="material-icons">delete</i>
                </a>
              </span>
              <span
                onClick={() =>
                  console.log(`Todo with id: ${todo.id} was clicked on`)
                }
              >
                <a className="btn-floating btn-small waves-effect waves-light blue">
                  <i className="material-icons">edit</i>
                </a>
              </span>
              <span onClick={() => completedTodo(todo.id)}>
                <a className="btn-floating btn-small waves-effect waves-light green">
                  <i className="material-icons">check</i>
                </a>
              </span>
            </span>
          </div>
        </div>
      );
    })
  ) : (
    <p className="block">You have finished all your todo Items</p>
  );

  return (
    <div>
      <h3>List of Items:</h3>
      <ul>{todoList}</ul>
    </div>
  );
};

export default List;

//ALL ITEMS{
//return all items

// UNFINISHED ITEMS {
//filter()
//return !completed

//COMPLETED ITEMS
// return completed===true
