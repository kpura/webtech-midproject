import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, TextField } from '@mui/material';

const MapLocations = () => {
  const popularSpots = [
    { name: 'Mount Fuji', location: 'Shizuoka, Japan', image: '/fuji.jpg' },
    { name: 'Hollywood Sign', location: 'Los Angeles, California', image: '/hollywood.jpg' },
    { name: 'Bulusan Volcano Natural Park', location: 'Bulusan, Sorsogon', image: '/Bulusan Lake.jpg' },
    { name: 'National Tulip Day', location: 'Amsterdam', image: '/tulips.jpg' },
    { name: 'Cagsawa Ruins', location: 'Albay', image: '/mayon.jpg' },
    { name: 'Donsol whale sharks', location: 'Donsol, Sorsogon', image: '/whale-shark.jpg' },
  ];

  const [zoom, setZoom] = useState(100);

  const ZoomIn = () => {
    if (zoom < 200) { 
      setZoom(prevZoom => prevZoom + 10);
    }
  };

  const ZoomOut = () => {
    if (zoom > 50) {
      setZoom(prevZoom => prevZoom - 10);
    }
  };

  return (
    <Container>
        <br />
        <TextField
        label="Search Maps"
        variant="outlined"
        color="success"
        size="small"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <br />
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '450px', marginBottom: '20px' }}>
        <img
          src="/map.png"
          alt="Map"
          style={{ width: '100%', height: '130%', transform: `scale(${zoom / 100})`, transition: 'transform 0.5s ease' }}
        />
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }}>
          <button onClick={ZoomIn}>+</button>
          <button onClick={ZoomOut}>-</button>
        </div>
      </div>
      
      <Typography variant="h6" component="h3" style={{ marginBottom: '20px', fontFamily: 'Poppins', fontWeight: 'bold' }}>
        Popular Destinations
      </Typography>
      <Grid container spacing={2}>
        {popularSpots.map((spot, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div style={{ width: '100%', height: '100%', }}>
              <Card style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0EBE3' }}>
                  <Typography variant="h6" component="h4" gutterBottom style={{ fontFamily: 'Poppins', fontSize: '18px' }}> 
                    {spot.name}
                  </Typography>
                  <img src={spot.image} alt={spot.name} style={{ width: '120%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Poppins' }}>
                    Location: {spot.location}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
};

export default MapLocations;
