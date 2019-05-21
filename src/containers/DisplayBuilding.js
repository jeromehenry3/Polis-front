import { connect } from 'react-redux';

import { closeAllModals, openModifyPanel, userVote, updateFormField } from 'src/store/reducer';
/**
 * Local import
 */
import DisplayBuilding from 'src/components/LeafletMap/DisplayBuilding';

// Action Creators


const mapStateToProps = state => ({
  isDisplayBuildingOpen: state.isDisplayBuildingOpen,
  datas: state.datas,
  loading: state.loading,
  isModifyPanelOpen: state.isModifyPanelOpen,
  didUserVote: state.didUserVote,
  isConnected: state.isConnected,
  buildings: state.buildings,
});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  openModifyPanel: () => {
    dispatch(openModifyPanel());
  },
  userVote: (id, vote) => {
    dispatch(userVote(id, vote));
  },
  updateFormField: (field, value) => {
    dispatch(updateFormField(field, value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayBuilding);
