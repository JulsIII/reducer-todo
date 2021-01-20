import React from 'react';

const TodoList = (props) => {

    <div>
    <h3>List of Items</h3>
    <ul>
      {TodoList.map(todo => {
        return(<li>{todo.title}</li>);
      })
      }
      <li>todo 1</li>
      <li>todo 2</li>
      <li>todo 3</li>
    </ul>
    <button>Clear Completed</button>
  </div>

}

export default TodoList;