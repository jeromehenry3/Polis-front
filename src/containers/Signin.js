import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import { updateFormField, signin } from 'src/store/reducer';

const mapStateToProps = state => ({
  username: state.username,
  passwordInput: state.passwordInput,
  passwordConfirmInput: state.passwordConfirmInput,
  firstNameInput: state.firstNameInput,
  lastNameInput: state.lastNameInput,
  signinErrors: state.signinErrors,
  redirectToLogin: state.redirectToLogin,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  signin: () => {
    dispatch(signin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
