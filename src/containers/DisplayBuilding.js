import { connect } from 'react-redux';

import { closeAllModals } from 'src/store/reducer';
/**
 * Local import
 */
import DisplayBuilding from 'src/components/LeafletMap/DisplayBuilding';

// Action Creators


const mapStateToProps = state => ({
  isDisplayBuildingOpen: state.isDisplayBuildingOpen,
  datas: state.datas,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayBuilding);
