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

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  }


// console.log("AppState", state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <button onClick={handleToggleCompleted}>test btn</button> */}
    <TodoList todos={state.todos} handleToggleCompleted={handleToggleCompleted} />
    <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
