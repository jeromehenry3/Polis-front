import { connect } from 'react-redux';

/**
 * Local import
 */
import LostPassword from 'src/components/LostPassword';

// Action Creators
import { updateFormField, forgottenPassword } from 'src/store/reducer';

const mapStateToProps = state => ({
  username: state.username,
  redirectToLogin: state.redirectToLogin,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  forgottenPassword: () => {
    dispatch(forgottenPassword());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LostPassword);
