import { connect } from 'react-redux';
import DispensaryList from './dispensary_list'
import {fetchDispensaries, fetchSearchByNameDispensary} from '../../actions/dispensary_actions'

const mSTP = state => {
    return ({
        dispensaries: Object.values(state.entities.dispensaries),
        searchKeyword: state.entities.search
    });
};

const mDTP = dispatch => ({
    fetchSearchByNameDispensary: (keyword) => dispatch(fetchSearchByNameDispensary(keyword)),
    fetchDispensaries: () => dispatch(fetchDispensaries())
})

export default connect(mSTP, mDTP)(DispensaryList);