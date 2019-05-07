import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators

import { openDataForm, closeAllModals, updateFormField, getArchitectures, getBuildings } from 'src/store/reducer';


const mapStateToProps = state => ({
  buildings: state.buildings,
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
  getBuildings: () => {
    dispatch(getBuildings());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
