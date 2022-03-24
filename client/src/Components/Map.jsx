import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import MedicationIcon from '@mui/icons-material/Medication';
import ParkIcon from '@mui/icons-material/Park';
import mapStyles from './mapStyles';
import useStyles from './map-styles.js';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DatePicker } from "@progress/kendo-react-dateinputs";
// import DatePicker from "react-datepicker";


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
              Authorization: `Bearer ${apiKey}`
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
              Authorization: `Bearer ${apiKey}`
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
      {/* {console.log('Vet Places url: ', vetPlaces[0]?.url)} */}
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAjdy0uLt2_Ajynp6TpfhGZh0ym1C4v-eU' }}
      defaultCenter={coords}
      center={coords}
      defaultZoom={13}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      >
        {/* <div><DatePicker className={classes.dateContainer}/></div> */}
        {vetPlaces?.map((vetPlace, index) => (
          <div
          className={classes.markerContainer}
          lat={(vetPlace.coordinates.latitude)}
          lng={(vetPlace.coordinates.longitude)}
          key={index}
        >
          <MedicationIcon color="secondary" fontSize="large" onClick={() => window.open(vetPlace.url, '_blank')}/>
        </div>
      ))}
        {dogParks?.map((dogPark, i) => (
        //  console.log('dogParks :', dogParks);
        <div
          className={classes.markerContainer}
          lat={(dogPark.coordinates.latitude)}
          lng={(dogPark.coordinates.longitude)}
          key={i}
        >
         <ParkIcon color="primary" fontSize="large" onClick={() => window.open(dogPark.url, '_blank')}/>
        </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map;