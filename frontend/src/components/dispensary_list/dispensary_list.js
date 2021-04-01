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

        this.deepDup = this.deepDup.bind(this)
    }

    deepDup(arr){
        return arr.map(el => el instanceof Array ? this.deepDup(el) : el)
    }

    componentDidUpdate(prevProps) {
        this._isMounted = true;
        if ( ( prevProps.dispensaries !== this.props.dispensaries) && (prevProps.dispensaries.length === this.props.dispensaries.length) ) {
            if (this.props.searchKeyword !== "") {
                return this.props.fetchSearchByNameDispensary(this.props.searchKeyword)
                    .then(() => {
                        if(this._isMounted) {
                            // const dispensaryClone = this.deepDup(this.props.dispensaries)
                            this.setState({
                                dispensaries: this.props.dispensaries
                            })
                        }
                    })
            }
            this.setState({
                dispensaries: this.props.dispensaries
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const {dispensaries} = this.state;
        const items = dispensaries.map(dispensary => <DispensaryEntry key={dispensary._id} dispensary={dispensary}/>)
        return (
            <div className="dispensary-list">
                {items}
            </div>
        )
    }
}

export default DispensaryList;