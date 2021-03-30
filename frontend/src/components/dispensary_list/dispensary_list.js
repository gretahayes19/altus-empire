import React from 'react';

class DispensaryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispensaries: props.dispensaries
        }
    }

    componentDidMount() {
        debugger
    }

    render() {
        const {dispensaries} = this.state;
        const items = dispensaries.map(dispensary => console.log(dispensary.dispensaryName))
        return (
            <div className="dispensary-list">
                {items};
            </div>
        )
    }
}

export default DispensaryList;