import { connect } from 'react-redux';

/**
 * Local import
 */
import Welcome from 'src/components/Welcome';

// Action Creators
import { updateFormField } from 'src/store/reducer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
