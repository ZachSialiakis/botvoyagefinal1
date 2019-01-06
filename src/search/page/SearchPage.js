import React, { Component } from "react";
import superagent from "superagent";
import PropTypes from "prop-types";

// import DirectLine from 'botframework-directlinejs';
// import ReactWebChat from 'botframework-webchat';

import SearchForm from "../form/SearchForm";
import VenueCardList from "../list/VenueCardList";
import RecentSearchList from "../list/RecentSearchList";
import Footer from "../../component/main/Footer";
import foursquareApi from "../../FoursquareApi";

const VENUE_PHOTO_LIMIT = 8;

import "./search-page.scss";





const apiParams = {
  client_id: "5ULN3XJD2YGDNHKP4XNE3O1V5VZ2RGYXWZCMZXH0U01CI5AA",
  client_secret: "C4PC4RVYXYEVWASSAUMOYEYR0GHSR1VDIMWGNZRHWT1SY0WC",
  v: "24072017"
};

class SearchPage extends Component {
  static PropTypes = {
    venues: PropTypes.array.isRequired,
    recentSearch: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    // this.directLine = new DirectLine({ token: 'fJ3Mh68Hmdg.cwA.Fqo.byROQrXgUJFhJMn88M2xy2vmx2uwqAQw8FKPA-pFDaY' });
    this.state = {
      venues: null,
      recentSearch: [],
      photos: [],
      // id: this.props.match.params.id
      id: '412d2800f964a520df0c1fe3'
    };
    // this.handleClick(this.state.id);
  }



  componentDidMount() {
    const { query, location, id } = this.props.match.params;

    if (query && location) {
      this.getVenues(query, location);
      this.updateRecentSearch(query, location);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.query !== this.props.match.params.query ||
      nextProps.match.params.location !== this.props.match.params.location) {
      this.getVenues(nextProps.match.params.query, nextProps.match.params.location);
      this.updateRecentSearch(nextProps.match.params.query, nextProps.match.params.location);
    }
  }

  handleFormSubmit = (query, location) => {
    if (query && location) {
      this.props.history.push(`/query=${query}&location=${location}`);
    }
  };

  updateRecentSearch = (query, location) => {
    const recentSearchLimit = 10;

    if (query !== "" && location !== "") {
      if (this.state.recentSearch.length < recentSearchLimit) {
        this.state.recentSearch.unshift([`${query}`, `${location}`]);
      } else {
        this.state.recentSearch.shift();
        this.state.recentSearch.unshift([`${query}`, `${location}`]);
      }
    }
    const uniques = [];
    const itemsFound = {};

    for (let i = 0; i < this.state.recentSearch.length; i++) {
      const stringified = JSON.stringify(this.state.recentSearch[i]);

      if (!itemsFound[stringified]) {
        uniques.push(this.state.recentSearch[i]);
        itemsFound[stringified] = true;
      }
    }
    this.setState({
      recentSearch: uniques
    });
  };

  getVenues = (query, location) => {
    const url = "https://api.foursquare.com/v2/venues/explore";

    const params = {
      venuePhotos: "1",
      limit: "6",
      near: location,
      query,
      client_id: apiParams.client_id,
      client_secret: apiParams.client_secret,
      v: apiParams.v
    };


    superagent
      .get(url)
      .query(params)
      .set("Accept", "application/json")
      .then((data) => {
        console.log(data);
        this.setState({
          venues: data.body.response.groups[0].items,
          id: data.body.response.groups[0].items[0].venue.id
        });
        console.log(data.body.response);
      }, (err) => {
        console.log(`OPS ${err.message}`);
        this.setState({
          venues: []
        });
      });
  };

  getVenuePhotos = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${this.state.id}/photos`;
    const params = {
      client_id: foursquareApi.apiParams.client_id,
      client_secret: foursquareApi.apiParams.client_secret,
      v: foursquareApi.apiParams.v,
      limit: VENUE_PHOTO_LIMIT
    };

    foursquareApi.getVenuePhotos(url, params).then((data) => {
      this.setState({
        photos: data
      });
    }, (err) => {
      console.log(err.message);
      this.setState({
        photos: []
      });
    });

  };

  render() {
    const { query, location } = this.props.match.params;
    // console.log(this.state.id);
    // console.log(this.props.params);
    // console.log(this.state.photos);
    return (
      <div>
        <div className="search-page">
          {/* <ReactWebChat directLine={this.directLine} /> */}
          <div className="search-page-form-container">
            <SearchForm onSubmit={this.handleFormSubmit}
              query={query}
              location={location} />
          </div>
          <div className="search-page-lists">
            {/* <div className="tablet">
              <div className="content">
                <iframe src="https://webchat.botframework.com/embed/BotVoyage?s=fJ3Mh68Hmdg.cwA.Fqo.byROQrXgUJFhJMn88M2xy2vmx2uwqAQw8FKPA-pFDaY"></iframe>
              </div>
            </div> */}
            <div className="search-page-venue-card-list">
              {
                this.state.venues && <VenueCardList venue={this.state.venues} photoList={this.state.photos} />
              }
            </div> 
             <div className="search-page-recent-search-list">
              <RecentSearchList recentSearch={this.state.recentSearch}
                onClick={this.handleFormSubmit} />
            </div> 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
