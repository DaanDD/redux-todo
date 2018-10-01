import * as actionTypes from '../actions/types';

const initialState = {
  isLoadingTodos: false,
  todos: [],
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TODOS_STARTED:
      return {
        ...state,
        isLoadingTodos: true,
      };
    case actionTypes.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        isLoadingTodos: false,
        todos: action.payload.todos,
      };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload.todo,
        ],
      };
    case actionTypes.REMOVE_TODO_STARTED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.url !== action.payload.todo.url),
      };
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.url === action.payload.todo.url) {
            return action.payload.todo;
          }
          return todo;
        }),
      }
    default:
      return state;
  }
}

export default todoApp;
