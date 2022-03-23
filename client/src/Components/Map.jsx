import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material';
import mapStyles from './mapStyles';

const Map = () => {
  const media = useMediaQuery('(min-width:600px)');
  const [coords, setCoords] = useState({ });
  const [vetPlaces, setVetPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoords({ lat: latitude, lng: longitude });
    })
  }, []);

  // Make Yelp Api call for vet places

  return (
    <>
      <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={coords}
      center={coords}
      defaultZoom={3}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={''}
      onChildClick={''}

      >
      {/* {vetPlaces?.map((place, index) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {!media
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} >
                  <Typography variant="subtitle" gutterBottom> Vet name </Typography>
                 <img
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))} */}

      </GoogleMapReact>
    </>
  )
}

export default Map;