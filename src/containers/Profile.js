import { connect } from 'react-redux';

import { closeProfile, updateFormField, updateUser } from 'src/store/reducer';

/**
 * Local import
 */
import Profile from 'src/components/BurgerNav/Profile';


const mapStateToProps = state => ({
  isProfileOpen: state.isProfileOpen,
  username: state.username,
  passwordInput: state.passwordInput,
  passwordConfirmInput: state.passwordConfirmInput,
  firstNameInput: state.firstNameInput,
  lastNameInput: state.lastNameInput,
});

const mapDispatchToProps = dispatch => ({
  closeProfile: () => {
    dispatch(closeProfile());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  updateUser: () => {
    dispatch(updateUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
