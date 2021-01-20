import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todo => [{
    title:"todo 1",
    id: 1,
    completed: false
  },
  {
    title:"todo 2",
    id: 1,
    completed: false
  },
  {
    title:"todo 3",
    id: 1,
    completed: false
  }]

  return (
    <div className="App">
      <h1>Todo App</h1>
    <TodoList todos={todos} />
      <div className='todoForm'>
        <form>
          <lable>
            Title:
          </lable>
          <button>Submit Item</button>
        </form>
      </div>
    </div>
  );
}

export default App;
