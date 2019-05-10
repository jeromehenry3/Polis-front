import { connect } from 'react-redux';

/**
 * Local import
 */
import LostPassword from 'src/components/LostPassword';

// Action Creators
import { updateFormField, connectUser } from 'src/store/reducer';

const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LostPassword);
