import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onAddTodo(this.state.value);
    }
  }

  render() {
    return (
      <input
        autoFocus
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={this.state.value}
      />
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
