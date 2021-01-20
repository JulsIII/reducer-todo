import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addTodo, toggleCompleted } from "./actions";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  }

  // const handleToggleCompleted = (id) => {
  //   dispatch(toggleCompleted(0));
  // }

  // const handleClick = () => {
  //   dispatch(addTodo("FUCK FUCK"));
  // }

console.log("asd", state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <button onClick={handleClick}>test btn</button> */}
    <TodoList todos={state.todos} />
    <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
