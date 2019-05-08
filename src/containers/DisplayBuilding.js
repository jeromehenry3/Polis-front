import { connect } from 'react-redux';

import { closeAllModals } from 'src/store/reducer';
/**
 * Local import
 */
import DisplayBuilding from 'src/components/LeafletMap/DisplayBuilding';

// Action Creators


const mapStateToProps = state => ({
  isDisplayBuildingOpen: state.isDisplayBuildingOpen,
  address: state.address,
  architect: state.architect,
  architecture: state.architecture,
  builder: state.builder,
  certified: state.certified,
  creationDate: state.creationDate,
  delivered: state.delivered,
  description: state.description,
  id: state.id,
  images: state.images,
  latitude: state.latitude,
  longitude: state.longitude,
  name: state.name,
  planner: state.planner,
  promoter: state.promoter,
  surface: state.surface,
  urbanist: state.urbanist,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayBuilding);
