import { connect } from 'react-redux';

/**
 * Local import
 */
import ViewToggler from 'src/components/ViewToggler';

// Action Creators
import { toggleView } from 'src/store/reducer';

const mapStateToProps = state => ({
  view: state.view,
});

const mapDispatchToProps = dispatch => ({
  toggleView: (view) => {
    dispatch(toggleView(view));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewToggler);
