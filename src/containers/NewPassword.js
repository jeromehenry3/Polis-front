import { connect } from 'react-redux';

/**
 * Local import
 */
import NewPassword from 'src/components/LostPassword/NewPassword';

// Action Creators
import { updateFormField, setNewPassword } from 'src/store/reducer';

const mapStateToProps = state => ({
  passwordInput: state.passwordInput,
  passwordConfirmInput: state.passwordConfirmInput,
  redirectToLogin: state.redirectToLogin,
  newPasswordErrors: state.newPasswordErrors,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  setNewPassword: (newPassword, newPasswordConfirm, token) => {
    dispatch(setNewPassword(newPassword, newPasswordConfirm, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPassword);
