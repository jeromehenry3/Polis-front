import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators

import { openDataForm, closeAllModals, updateFormField, getArchitectures, openDisplayBuilding } from 'src/store/reducer';


const mapStateToProps = null;

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

  openDisplayBuilding: () => {
    dispatch(openDisplayBuilding());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
