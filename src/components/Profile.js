import React, { useState } from 'react';
import { Container, Typography, Button, Switch, FormControlLabel, Avatar, Grid, IconButton } from '@mui/material';
import { Favorite, Photo, ChevronRight, Language, Palette, Lock, Brightness4 } from '@mui/icons-material';

const Profile = () => {
  const [pinLockEnabled, setPinLockEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [profilePic] = useState('/user.png');

  const togglePinLock = () => {
    setPinLockEnabled(!pinLockEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const Logout = () => {
    console.log("Logged out successfully");
  };

  return (
    <Container maxWidth="large">
        <Grid item xs={12} container justifyContent="center">
          <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 100, height: 100, marginTop: '20px' }} />
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography fontSize="16px" align="center" marginTop="10px" gutterBottom style={{ fontFamily: 'Poppins' }}>
            Lauren Jauregui
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant="outlined" color="primary" style={{ borderRadius: '20px', fontFamily: 'Poppins' }}>
            Edit Profile
          </Button>
        </Grid>
    <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" marginTop="20px" marginBottom="10px" style={{ fontFamily: 'Poppins' }}>
            Content
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Favorite />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ textAlign: 'left', marginLeft: '20px', textTransform: 'none', fontFamily: 'Poppins' }} >
                  Favorites
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
                <ChevronRight />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Photo />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ textAlign: 'left', marginLeft: '20px', textTransform: 'none', fontFamily: 'Poppins' }}>
                  Photos
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
                <ChevronRight />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" marginTop="20px" marginBottom="10px" style={{ fontFamily: 'Poppins' }}>
            Preferences
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Language />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ fontFamily: 'Poppins', textAlign: 'left', marginLeft: '20px', textTransform: 'none' }} >
                  Language
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
                <ChevronRight />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Lock />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ fontFamily: 'Poppins', textAlign: 'left', marginLeft: '20px', textTransform: 'none' }} >
                  Pin Lock
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
                <FormControlLabel
                    control={<Switch checked={pinLockEnabled} onChange={togglePinLock} />}
                    label=""
                />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Brightness4 />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ fontFamily: 'Poppins', textAlign: 'left', marginLeft: '20px', textTransform: 'none' }} >
                  Dark Mode
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
              <FormControlLabel
                control={<Switch checked={darkModeEnabled} onChange={toggleDarkMode} />}
                label=""
            />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={() => {}}>
            <Grid container alignItems="center">
              <Grid item xs={1} style={{ marginTop: '10px' }}>
                <Palette />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" style={{ fontFamily: 'Poppins', textAlign: 'left', marginLeft: '20px', textTransform: 'none' }} >
                  Change Colors
                </Typography>
              </Grid>
              <Grid item xs={1} container justifyContent="flex-end">
                <ChevronRight />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={12} container justifyContent="center" style={{ marginTop: '20px', marginBottom: '50px' }}>
          <Button href="/login" variant="contained" color="primary" size="large" fullWidth onClick={Logout} marginTop="20px" style={{ fontFamily: 'Poppins', textTransform: 'none' }}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
