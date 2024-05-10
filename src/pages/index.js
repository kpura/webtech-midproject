import React from 'react';
import { Container, Button, Grid } from '@mui/material';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container maxWidth="100vh" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
      <Slider {...settings} style={{ width: '100%', margin: 'auto', marginTop: '10vh' }}>
        <div>
          <img src="/1.png" alt="Image 1" style={{ width: '100%', height: '330px' }} />
        </div>
        <div>
          <img src="/2.png" alt="Image 2" style={{ width: '100%', height: '330px' }} />
        </div>
        <div>
          <img src="/3.png" alt="Image 3" style={{ width: '100%', height: '330px' }} />
        </div>
      </Slider>
      <Grid container spacing={1} justifyContent="center" style={{ marginBottom: '110px' }}>
        <Grid item>
          <Link href="/login" passHref>
            <Button variant="contained" color="primary" size="large" style={{ width: '40vh', height: '150%', borderRadius: '10px', fontFamily: 'Poppins', textTransform: 'none', backgroundColor: '#FA7070' }}>Get Started</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
