import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import Spinner from './Spinner';

class TodoList extends Component {
  componentDidMount() {
    this.props.onLoadTodos();
  }

  render() {
    const {
      isLoadingTodos,
      todos,
      onRemoveTodo,
      onUpdateTodo,
    } = this.props;

    if (isLoadingTodos) {
      return <Spinner />;
    }

    return (
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            onRemove={() => onRemoveTodo(todo)}
            onUpdate={todo => onUpdateTodo(todo)}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onLoadTodos: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default TodoList;
