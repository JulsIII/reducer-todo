import React from 'react';
import TotoList from './components/TodoList';
import TotoForm from './components/TodoForm';
import './styles.css';

const tasks = [
  {
    name: 'TaskA',
    id: 123,
    completed: false
  },
  {
    name: 'TaskB',
    id: 124,
    completed: false
  },
  {
    name: 'TaskC',
    id: 125,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }



  handleItemToggle = (itemId)=> {

    this.setState({
      tasks: this.state.tasks.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })

    });
  }


  handleItemAdd = (itemName) => {
    const item = {
      name: itemName,
      id: this.state.tasks.length,
      completed: false
    };
    const newTasks = [...this.state.tasks, item];

    this.setState({
      tasks: newTasks
    });
  }


  handleItemCompleted = () => {
    const newTasks = this.state.tasks.filter(item=>{
      return(!item.completed);
    });

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todo:</h2>
          <TotoForm handleItemAdd={this.handleItemAdd}/>
        </div>
        <TotoList tasks={this.state.tasks} handleItemCompleted={this.handleItemCompleted} handleItemToggle={this.handleItemToggle}/>
      </div>
    );
  }
}

export default App;
