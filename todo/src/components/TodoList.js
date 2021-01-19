import React from 'react';
import Todo from "./Todo";

const TodoList = props => {

const handleClick = ()=> {
    props.handleItemCompleted();
}

    return (
        <div>
            {props.tasks.map(item => (
                <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
            ))}
            <button onClick={handleClick}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;