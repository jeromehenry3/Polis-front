import { connect } from 'react-redux';

import { closeAllModals, disconnect, updateFormField, toggleMenu, closeMenu, openProfile } from 'src/store/reducer';
/**
 * Local import
 */
import BurgerNav from 'src/components/BurgerNav';

// Action Creators

// isConnected,
// isMenuOpen,
// disconnect,
// updateFormField,
// closeAllModals,
// toggleMenu,
// openProfile,

const mapStateToProps = state => ({
  isConnected: state.isConnected,
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  disconnect: () => {
    dispatch(disconnect());
  },
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
  openProfile: () => {
    dispatch(openProfile());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerNav);
