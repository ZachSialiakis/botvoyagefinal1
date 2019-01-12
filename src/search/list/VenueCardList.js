import React, { Component } from "react";
import PropTypes from "prop-types";

import VenueCard from "./VenueCard";

import "./venue-card-list.scss";

class VenueCardList extends Component {
  static PropTypes = {
    venues: PropTypes.array.isRequired,
    photoList: PropTypes.array.isRequired
  };

  handleSelectVenue = (venue) => {
    console.log(venue);
    this.props.onClick(venue.id);
    this.setState({
      id: venue.id
    });
  };

  getVenuePhotos = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}/photos`;
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
    const { venue, photoList } = this.props;

    return (

      <div className="venues">
        {
          venue.length > 0 ? (<ul className="venue-card-list">
            {venue.map((venueValue, index) => (
              <li key={venue[index].referralId}
                className="venue-card-list-item" >
                <VenueCard venues={venue[index]}
                  onClick={this.handleSelectVenue} />
              </li>
            ))
            }
          </ul>) : <h1 className="venue-card-list-error-msg"> {"No Results"} </h1>
        }
      </div>
    );
  }
}

export default VenueCardList;
