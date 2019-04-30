import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changeLoginInput, changePasswordInput, toggleWelcomeView } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = dispatch => ({
  changeLoginInput: (value) => {
    dispatch(changeLoginInput(value));
  },
  changePasswordInput: (value) => {
    dispatch(changePasswordInput(value));
  },
  goToSignin: () => {
    dispatch(toggleWelcomeView('Signin'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
