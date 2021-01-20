
export const initialState = {
    todos:[
        {
        title:"tofghdo 1",
        id: 0,
        completed: false
        },{
        title:"tofghdo 2",
        id: 1,
        completed: false
        },{
        title:"tofhdo 3",
        id: 2,
        completed: false
        }
    ]
}
    
const reducer = (state, action) => {

    switch(action.type) {
        case("ADD_TODO"):
             const newTodo = {
                 id: state.todos.length,
                 completed: false,
                 title: action.payload
             };
             console.log("redc", action);
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