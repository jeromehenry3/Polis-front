import { connect } from 'react-redux';

/**
 * Local import
 */
import Signin from 'src/components/Signin';

// Action Creators
import { toggleWelcomeView } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({

  goToLogin: () => {
    dispatch(toggleWelcomeView('Login'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
