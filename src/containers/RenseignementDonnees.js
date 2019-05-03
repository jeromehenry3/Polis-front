import { connect } from 'react-redux';

import { updateFormField, closeDataForm, submitBuilding } from 'src/store/reducer';

/**
 * Local import
 */
import RenseignementDonnees from '../components/LeafletMap/RenseignementDonnees';


// Action Creators

const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
  nameInput: state.nameInput,
  surfaceInput: state.surfaceInput,
  adressInput: state.adressInput,
  styleInput: state.styleInput,
  dateInput: state.dateInput,
  architectInput: state.architectInput,
  promotorInput: state.promotorInput,
  constructorInput: state.constructorInput,
  amenageInput: state.amenageInput,
  urbanistInput: state.urbanistInput,
  youknowInput: state.youknowInput,
});

const mapDispatchToProps = dispatch => ({
  closeDataForm: () => {
    dispatch(closeDataForm());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  submitBuilding: () => {
    dispatch(submitBuilding());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenseignementDonnees);
