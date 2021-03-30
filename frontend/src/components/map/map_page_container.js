import { connect } from 'react-redux';
import MapPage from './map_page';
import { fetchDispensaries } from '../../actions/dispensary_actions';

const mSTP = state => ({
    dispensaries: state.entities.dispensaries
});

const mDTP = dispatch => ({
    fetchDispensaries: () => dispatch(fetchDispensaries()),

})

export default connect(mSTP, mDTP)(MapPage);