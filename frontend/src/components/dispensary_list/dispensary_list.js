import React from 'react';
import DispensaryEntry from './dispensary_entry';
import '../../styles/dispensary_list.css';


class DispensaryList extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            dispensaries: props.dispensaries
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        
        const {dispensaries} = this.props;
        const items = dispensaries.length ? 
                    dispensaries.map(dispensary => <DispensaryEntry key={dispensary._id} dispensary={dispensary} />)
                    : null;
        return (
            <div className="dispensary-list">
                {items}
            </div>
        )
    }
}

export default DispensaryList;