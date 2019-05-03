import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateFormField, connectUser } from 'src/store/reducer';

const mapStateToProps = state => ({
  username: state.username,
  passwordInput: state.passwordInput,
  isConnected: state.isConnected,
  loginMessage: state.loginMessage,
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
