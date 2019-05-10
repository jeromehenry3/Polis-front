import { connect } from 'react-redux';

/**
 * Local import
 */
import NewPassword from 'src/components/LostPassword/NewPassword';

// Action Creators
import { updateFormField, newPassword } from 'src/store/reducer';

const mapStateToProps = state => ({
  passwordInput: state.passwordInput,
  passwordConfirmInput: state.passwordConfirmInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  newPassword: () => {
    dispatch(newPassword());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPassword);
