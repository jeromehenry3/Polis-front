import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateFormField, openDataFormButton, closeAllModals } from 'src/store/reducer';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
