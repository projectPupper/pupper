import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ParkIcon from '@mui/icons-material/Park';
import mapStyles from './mapStyles';
import useStyles from './map-styles.js';
import axios from 'axios';
// import './marker.css';
import {REACT_APP_GOOGLE_MAPS_API_KEY, YELP_API_KEY } from '../../../config.js';

const pin = {
  width: '30px',
  height: '30px',
  borderRadius: '50% 50% 50% 0',
  background: '#1709ee',
  position: 'absolute',
  WebkitTransform: 'rotate(-45deg)',
  MozTransform: 'rotate(-45deg)',
  OTransform: 'rotate(-45deg)',
  MSTransform: 'rotate(-45deg)',
  Transform: 'rotate(-45deg)',
  left: '50%',
  top: '50%',
  margin: '-20px 0 0 -20px',
  WebkitAnimationName: 'bounce',
  MozAnimationName: 'bounce',
  OAnimationName: 'bounce',
  MsAnimationName: 'bounce',
  AnimationNamee: 'bounce',
  // -webkit-animation-fill-mode: 'both',
  // -moz-animation-fill-mode: 'both',
  // -o-animation-fill-mode: 'both',
  // -ms-animation-fill-mode: 'both',
  // animation-fill-mode: 'both',
  // -webkit-animation-duration: '1s',
  // -moz-animation-duration: '1s',
  // -o-animation-duration: '1s',
  // -ms-animation-duration: '1s',
  // animation-duration: '1s',
}

const pinAfter = {
  content: '',
  width: '14px',
  height: '14px',
  margin: '8px 0 0 8px',
  background: '#e61111',
  position: 'absolute',
  borderRadius: '50%'
}

const pulse = {
  background: 'rgba(0,0,0,0.9)',
  borderRadius: '80%',
  height: '14px',
  width: '14px',
  position: 'absolute',
  left: '50%',
  top: '50%',
  margin: '11px 0px 0px -12px',
  // -webkit-transform: 'rotateX(55deg)',
  // -moz-transform: 'rotateX(55deg)',
  // -o-transform: 'rotateX(55deg)',
  // -ms-transform: 'rotateX(55deg)',
  // transform: 'rotateX(55deg)',
  // z-index: '-2'
}

const Map = () => {
  const media = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const [coords, setCoords] = useState({ });
  const [dogParks, setDogParks] = useState([]);
  const [vetPlaces, setVetPlaces] = useState([]);

  const apiKey = 'BwDL8KP6X9hDs-HgPPLomyUfctPLyAUyBcIhfXcowvAABUJMhlgJQeiMchnp7Q4gOmX3JC8hv0Oij_xp-es7q0ei0qpI_YDq-MJUWAPL9JVfPltLIhvvkB3OMf84YnYx';


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoords({ lat: latitude, lng: longitude });
    })
  }, []);

  // Make Yelp Api call for vet places
  useEffect(() => {
    axios.get(
      `/api/yelp`,
      {headers: {
              Authorization: `Bearer ${YELP_API_KEY}`
              },
              params: {
                term: 'vet',
                latitude: coords.lat,
                longitude: coords.lng
              }
          },
    )
    .then(({data}) => {
      setVetPlaces(data);
    });
  }, [coords])

  // Make Yelp Api call for doggo parks
  useEffect(() => {
    axios.get(
      `/api/yelp`,
      {headers: {
              "Authorization": `Bearer ${YELP_API_KEY}`
              },
              params: {
                term: 'dog_park',
                latitude: coords.lat,
                longitude: coords.lng
              }
          },
    )
    .then(({data}) => {
      // console.log('dogParks :', data);
      setDogParks(data);
    });
  }, [coords])

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API_KEY}}
      defaultCenter={coords}
      center={coords}
      defaultZoom={13}
      yesIWantToUseGoogleMapApiInternals={true}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      >
        <Marker lat={coords.lat} lng={coords.lng} />
        {vetPlaces?.map((vetPlace, index) => (
          <div
          className={classes.markerContainer}
          lat={(vetPlace.coordinates.latitude)}
          lng={(vetPlace.coordinates.longitude)}
          key={index}
        >
          <LocalHospitalIcon style={{ color: '#ee0909' }} fontSize="large" onClick={() => window.open(vetPlace.url, '_blank')}/>
        </div>
      ))}
        {dogParks?.map((dogPark, i) => (
        <div
          className={classes.markerContainer}
          lat={(dogPark.coordinates.latitude)}
          lng={(dogPark.coordinates.longitude)}
          key={i}
        >
         <ParkIcon style={{ color: '#4b7d40' }} fontSize="large" onClick={() => window.open(dogPark.url, '_blank')}/>
        </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

const Marker = props => {
  return <>
    <div className="pin" style={pin}></div>
    <div className="pulse" style={pulse}></div>
  </>
}

export default Map;