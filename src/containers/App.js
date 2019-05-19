import { connect } from 'react-redux';

import { checkCookie } from 'src/store/reducer';
/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators


const mapStateToProps = state => ({
  isConnected: state.isConnected,
  loginStatus: state.loginStatus,
  disconnected: state.disconnected,
});

const mapDispatchToProps = dispatch => ({
  checkCookie: () => {
    dispatch(checkCookie());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
