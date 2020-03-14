import { connect } from 'react-redux';

import { updateFormField, closeAllModals, submitBuilding, findAddress, resetFormBuilding } from 'src/store/reducer';

/**
 * Local import
 */
import RenseignementDonnees from '../components/LeafletMap/RenseignementDonnees';


// Action Creators

const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
  nameInput: state.nameInput,
  surfaceInput: state.surfaceInput,
  addressInput: state.addressInput,
  styleInput: state.styleInput,
  dateInput: state.dateInput,
  architectInput: state.architectInput,
  promoterInput: state.promoterInput,
  builderInput: state.builderInput,
  plannerInput: state.plannerInput,
  urbanistInput: state.urbanistInput,
  descriptionInput: state.descriptionInput,
  loading: state.loading,
  architectures: state.architectures || [],
  fileInput: state.fileInput,
  fileText: state.fileText,
});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  submitBuilding: () => {
    dispatch(submitBuilding());
  },
  findAddress: () => {
    dispatch(findAddress());
  },
  resetFormBuilding: () => {
    dispatch(resetFormBuilding());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementDonnees);
