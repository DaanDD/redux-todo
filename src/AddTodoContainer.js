import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import * as actionCreators from './actions/creators';

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (title) => {
    dispatch(actionCreators.addTodo(title));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
