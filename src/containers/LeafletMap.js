import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators


import {
  openDataForm, closeAllModals, updateFormField, getArchitectures,
  getBuildings, openDisplayBuilding,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  buildings: state.buildings,
  center: state.center,
  zoom: state.zoom,
  userLocalized: state.userLocalized,
  loadingWithLoader: state.loadingWithLoader,
  isConnected: state.isConnected,
  fetchingBuildings: state.fetchingBuildings,
});

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },

  closeAllModals: () => {
    dispatch(closeAllModals());
  },

  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },

  getArchitectures: () => {
    dispatch(getArchitectures());
  },

  getBuildings: (bounds) => {
    dispatch(getBuildings(bounds));
  },

  openDisplayBuilding: (id) => {
    dispatch(openDisplayBuilding(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
