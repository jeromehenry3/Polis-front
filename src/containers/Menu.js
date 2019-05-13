import { connect } from 'react-redux';

import Menu from 'src/components/LeafletMap/Menu';

import { updateFormField, openDataForm } from 'src/store/reducer';

const mapStateToProps = state => ({
  searchInput: state.searchInput,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  openDataForm: (isLoading) => {
    dispatch(openDataForm([], isLoading));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
