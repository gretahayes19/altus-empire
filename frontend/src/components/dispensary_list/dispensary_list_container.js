import { connect } from 'react-redux';
import DispensaryList from './dispensary_list';

const mSTP = state => {
    debugger;
    return ({
        dispensaries: Object.values(state.entities.dispensaries)
    });
};

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(DispensaryList);