import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
  }

  onToggleCompleted() {
    const newTodo = {
      ...this.props.todo,
      completed: !this.props.todo.completed,
    };
    this.props.onUpdate(newTodo);
  }

  render() {
    const { todo } = this.props;

    return (
      <li>
        <div className="view">
          <input
            checked={todo.completed}
            className="toggle"
            onChange={this.onToggleCompleted}
            type="checkbox"
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.props.onRemove} />
        </div>
      </li>
    );
  }
}

Todo.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Todo;
