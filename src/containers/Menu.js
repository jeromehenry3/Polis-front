import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateFormField, disconnect } from 'src/store/reducer';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
  redirectToLogin: state.redirectToLogin,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  disconnect: () => {
    dispatch(disconnect());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
