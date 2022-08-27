import './index.css'

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchResult: '',
  }

  search = event => {
    this.setState({searchResult: event.target.value})
  }

  render() {
    const {searchResult} = this.state
    const {destinationsList} = this.props
    const res = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchResult.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Destination Search</h1>
          <div className="input-card">
            <input
              className="input"
              type="search"
              placeholder="Search"
              value={searchResult}
              onChange={this.search}
            />
            <img
              className="imag"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul>
            {res.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
