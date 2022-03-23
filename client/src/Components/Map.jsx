import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material';
import mapStyles from './mapStyles';
import useStyles from './map-styles.js';
import axios from 'axios';
import { YELP_API_KEY, REACT_APP_GOOGLE_MAPS_API_KEY} from '../../../config.js';


const Map = () => {
  const media = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const [coords, setCoords] = useState({ });
  const [vetPlaces, setVetPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoords({ lat: latitude, lng: longitude });
    })
  }, []);

  // Make Yelp Api call for vet places
  useEffect(() => {
    // const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
    const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(
      `${corsApiUrl}/https://api.yelp.com/v3/businesses/search?term=vet&latitude=52&longitude=13`,
      {headers: {
              "Authorization": `Bearer ${YELP_API_KEY}`
              },
              // params: {
              //   term: 'vet',
              // },
          }
    )
    .then((response) => {
        var response = response.data;
      },
      (error) => {
        var status = error.response.status
      }
    );
  })

  return (
    <div className={classes.mapContainer}>
      {console.log('Coords : ', coords)}
      <GoogleMapReact
      bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={coords}
      center={coords}
      defaultZoom={15}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map;