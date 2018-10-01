import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as actionCreators from './actions/creators';

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoadingTodos: state.isLoadingTodos,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadTodos: () => {
    dispatch(actionCreators.loadTodos());
  },
  onRemoveTodo: (todo) => {
    dispatch(actionCreators.removeTodo(todo));
  },
  onUpdateTodo: (todo) => {
    dispatch(actionCreators.updateTodo(todo));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
