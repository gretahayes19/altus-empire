import { connect } from 'react-redux';
import DispensaryList from './dispensary_list';

const mSTP = state => ({
    dispensaries: Object.values(state.entities.dispensaries)
});

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(DispensaryList);