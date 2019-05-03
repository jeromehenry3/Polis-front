import { connect } from 'react-redux';

import { updateFormField, closeDataForm } from 'src/store/reducer';

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
  promotorInput: state.promotorInput,
  constructorInput: state.constructorInput,
  amenageInput: state.amenageInput,
  urbanistInput: state.urbanistInput,
  youknowInput: state.youknowInput,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  addBuilding: () => {

  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementDonnees);
