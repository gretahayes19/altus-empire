import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../styles/map.css'
import e from 'cors';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            focus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.storeKeyWord = debounce(this.props.storeKeyWord, 200)
    }

    componentDidUpdate() {
        console.log('Goddamn');
    }

    update(e) {
        this.setState({ query: e.target.value }, this.handleSubmit);
    }

    handleFocus() {
        this.setState({ focus: true })
    }

    handleBlur() {
        this.setState({ focus: false })
    }

    handleSubmit(e) {
        console.log('update')
        if (this.state.query === "") {
            this.props.fetchDispensaries();
        } else this.props.fetchSearchByNameDispensary(this.state.query)
    }

    render() {

        const { results } = this.props

        return (
                <div className="search-bar" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <form onSubmit={this.handleSubmit} className="search-input">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Find a dispensary near you" onChange={this.update} />
                        <button className="map-search-button" onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
        )
    }
}

const debounce = (fcn, wait) => {
  let timeout;

  return function debouncedFcn(...args) {
    const later = () => {
      timeout = null;
      fcn(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait)
  };
}

export default SearchBar