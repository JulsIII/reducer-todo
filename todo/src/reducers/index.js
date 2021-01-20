
export const initialState = {
    todos:[
        {
        title:"todo 1",
        id: 1,
        completed: false
        },{
        title:"todo 2",
        id: 1,
        completed: false
        },{
        title:"todo 3",
        id: 1,
        completed: false
        }
    ]
}
    
const reducer = (state, action) => {

    switch(action.type) {
        case('ADD_TODO'):
             const newTodo = {
                 id: state.todos.length,
                 completed: false,
                 title: action.payload
             };

            return({...state, todos:[...state.todos, newTodo]});
        case("TOGGLE_COMPLETED"):
             //map through each todo
             //if todo has the id we want(in action payload), return copy of that item with completed flipped
             //if todo does not have the id, return as is
            return({...state, todos:state.todos.map(todo=>{
                if(todo.id === action.payload){
                    return({...todo, completed: !todo.completed});
                } else {
                    return(todo);
                }
            })});
        default: 
        return state;
    }
}

export default reducer;