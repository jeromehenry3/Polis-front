import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators


import {
  openDataForm,
  closeAllModals,
  updateFormField,
  getArchitectures,
  getBuildings,
  openDisplayBuilding,
  closeMenu,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  buildings: state.buildings, // the list of buildings (array)
  center: state.center, // the center of the map (array of coords)
  zoom: state.zoom, // the level of zoom (number)
  userLocalized: state.userLocalized, // Is the user localized yet ? (bool)
  loadingWithLoader: state.loadingWithLoader, // Is the loader to be shown ? (bool)
  isConnected: state.isConnected, // Is the user connected ? (bool)
  fetchingBuildings: state.fetchingBuildings, // is the app fetching for buildings ? (bool)
});

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  }, // Opens the "new building" form from given coords

  closeAllModals: () => {
    dispatch(closeAllModals());
  }, // Closes opened modals

  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  }, // Updates a state from its name and the new value

  getArchitectures: () => {
    dispatch(getArchitectures());
  }, // fetches the architectural styles available from the API

  getBuildings: (bounds) => {
    dispatch(getBuildings(bounds));
  }, // fetches buildings to be displayed from the API

  openDisplayBuilding: (id) => {
    dispatch(openDisplayBuilding(id));
  }, // Opens the modal to display a building's data from its id

  closeMenu: () => {
    dispatch(closeMenu());
  }, // Closes the main menu
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
