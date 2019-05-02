import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators
import { updateFormField, openDataForm, closeDataForm } from 'src/store/reducer';

const mapStateToProps = state => ({
  isDataFormOpen: state.isDataFormOpen,
});

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },
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
)(LeafletMap);
