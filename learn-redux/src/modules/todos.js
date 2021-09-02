// make redux module with DUCKS pattern

// declare action types
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// create action functions
let nextId = 1; // initial unique id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // create new todo and increase nextId
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// declare initial state
const initialState = [
  /* example 
  {
    id: 1,
    text: "example",
    done: flase
  }
  */
];

// declare reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
