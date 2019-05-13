import { connect } from 'react-redux';

import { closeAllModals, openRenseignementDonnees } from 'src/store/reducer';

/**
 * Local import
 */
import BoutonPlus from '../components/LeafletMap/BoutonPlus';


// Action Creators

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  openRenseignementDonnees: () => {
    dispatch(openRenseignementDonnees());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoutonPlus);
