import { connect } from 'react-redux';

/**
 * Local import
 */
import Profile from 'src/components/BurgerNav/Profile';


const mapStateToProps = state => ({
  isProfileOpen: state.isProfileOpen,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
