import * as actionTypes from './types';
import * as api from '../api';

export const loadTodos = () => {
  return (dispatch) => {
    dispatch(loadTodosStarted());

    api.getTodos().then((data) => {
      dispatch(loadTodosSuccess(data));
    });
  };
};

export const loadTodosStarted = () => ({
  type: actionTypes.LOAD_TODOS_STARTED,
});

export const loadTodosSuccess = (todos) => ({
  type: actionTypes.LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const addTodo = (title) => {
  return (dispatch) => {
    api.addTodo(title)
      .then(todo => {
        dispatch(addTodoSuccess(todo));
      })
      .catch(error => {
        dispatch(addTodoFailure(error));
      });
  };
};

export const addTodoStarted = (title) => ({
  type: actionTypes.ADD_TODO_STARTED,
  payload: { title },
});

export const addTodoSuccess = (todo) => ({
  type: actionTypes.ADD_TODO_SUCCESS,
  payload: { todo },
});

export const addTodoFailure = (error) => ({
  type: actionTypes.ADD_TODO_FAILURE,
  payload: { error },
});

export const removeTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodoStarted(todo));

    api.removeTodo(todo.url)
      .catch(error => {
        console.log('failure', error);
        dispatch(removeTodoFailure(error));
      });
  };
};

export const removeTodoStarted = (todo) => ({
  type: actionTypes.REMOVE_TODO_STARTED,
  payload: { todo },
});

export const removeTodoFailure = (error) => ({
  type: actionTypes.REMOVE_TODO_FAILURE,
  payload: { error },
});

export const updateTodo = (todo) => {
  return (dispatch) => {
    dispatch(updateTodoStarted(todo));
    api.patchTodo(todo);
  };
};

export const updateTodoStarted = (todo) => ({
  type: actionTypes.UPDATE_TODO,
  payload: { todo },
});
