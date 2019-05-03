import { connect } from 'react-redux';

/**
 * Local import
 */
import LeafletMap from 'src/components/LeafletMap';

// Action Creators

import { openDataForm, closeAllModals, updateFormField } from 'src/store/reducer';


const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  openDataForm: (position) => {
    dispatch(openDataForm(position));
  },

  closeAllModals: () => {
    dispatch(closeAllModals());
  }

  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafletMap);
