import { connect } from 'react-redux';
import DispensaryList from './dispensary_list'
import {fetchSearchByNameDispensary} from '../../actions/dispensary_actions'

const mSTP = state => {
    return ({
        dispensaries: Object.values(state.entities.dispensaries),
        searchKeyword: state.entities.search
    });
};

const mDTP = dispatch => ({
    fetchSearchByNameDispensary: (keyword) => dispatch(fetchSearchByNameDispensary(keyword)),
    // fetchPhoto: dispendaryId => dis
})

export default connect(mSTP, mDTP)(DispensaryList);