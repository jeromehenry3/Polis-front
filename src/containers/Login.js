import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateFormField, toggleWelcomeView } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  goToSignin: () => {
    dispatch(toggleWelcomeView('Signin'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
