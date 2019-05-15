import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import {
  updateFormField, openDataFormButton, closeAllModals,
  autoComplete, centerByAddress, findAddressSearch, disconnect, toggleMenu,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
  autoCompleteResults: state.autoCompleteResults,
  isAutocompleteOpen: state.isAutocompleteOpen,
  isConnected: state.isConnected,
  redirectToLogin: state.redirectToLogin,
  isMenuOpen: state.isMenuOpen,
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
  },

  findAddressSearch: (address) => {
    dispatch(findAddressSearch(address));
  },
  disconnect: () => {
    dispatch(disconnect());
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
