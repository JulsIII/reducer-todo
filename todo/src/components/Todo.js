import React from 'react';

const Todo = (props) => {

const {todo} = props; 
return(<li className={todo.completed ? "completed":""}>{todo.title}</li>);

}

export default Todo;