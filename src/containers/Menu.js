import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateFormField, openDataFormButton, closeAllModals, autoComplete, centerByAddress } from 'src/store/reducer';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
  autoCompleteResults: state.autoCompleteResults,
  isAutocompleteOpen: state.isAutocompleteOpen,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  openDataForm: () => {
    dispatch(openDataFormButton());
  },

  closeAllModals: () => {
    dispatch(closeAllModals());
  },

  autoComplete: (value) => {
    dispatch(autoComplete(value));
  },

  centerByAddress: (position) => {
    dispatch(centerByAddress(position));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
