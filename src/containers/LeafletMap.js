import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import { openDataForm } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
