import { connect } from 'react-redux';

import { closeProfile } from 'src/store/reducer';

/**
 * Local import
 */
import Profile from 'src/components/BurgerNav/Profile';


const mapStateToProps = state => ({
  isProfileOpen: state.isProfileOpen,
});

const mapDispatchToProps = dispatch => ({
  closeProfile: () => {
    dispatch(closeProfile());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
