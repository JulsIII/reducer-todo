import React from 'react'

class TodoForm extends React.Component {

state = {
    inputText: ""
}

handleSubmit = (e) => {
    e.prevent.deafult();
    this.props.handleAddTodo(this.state.inputText);
}

handleChange = (e) => {

    this.state({
        inputText:e.target.value
    });
}

    render() {
        return(
            <div className='todoForm'>
                 <form onSubmit={this.handleSubmit}>
                  <lable>
                      Title:
                     <input onChange={this.handleChange} value={this.state.inputText}/>
                </lable>
                 <button>Submit Item</button>
                </form>
            </div>
            );
    }
}

export deafult TodoForm; 