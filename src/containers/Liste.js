import { connect } from 'react-redux';

/**
 * Local import
 */
import Liste from 'src/components/LeafletMap/Liste';

// Action Creators
import { getBuildingsListData } from 'src/store/reducer';

const mapStateToProps = state => ({
  buildings: state.buildings,
  listData: state.listData,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getBuildingsListData: (list) => {
    dispatch(getBuildingsListData(list));
  },
  // connectUser: () => {
  //   dispatch(connectUser());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Liste);
