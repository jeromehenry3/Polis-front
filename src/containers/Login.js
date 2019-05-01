import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { updateFormField } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
