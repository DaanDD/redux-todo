import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import TodoListContainer from './TodoListContainer';
import AddTodoContainer from './AddTodoContainer';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <AddTodoContainer />
        </header>
        <section className="main">
          <TodoListContainer />
        </section>
      </section>
    );
  }
}

export default App;
